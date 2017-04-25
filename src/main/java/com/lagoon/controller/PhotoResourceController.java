package com.lagoon.controller;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.lagoon.common.ExceptionUtils;
import com.lagoon.common.LagoonResult;
import com.lagoon.model.Photo;
import com.lagoon.service.PhotoService;

@RestController
@RequestMapping("/api")
public class PhotoResourceController {

	private String imageName;

	@Autowired
	private PhotoService photoService;

	@RequestMapping(value = "/photo", method = RequestMethod.PUT)
	public LagoonResult editPhoto(@RequestBody Photo photo) {
		LagoonResult result = null;
		try {
			Photo updatedPhoto = this.photoService.save(photo);
			result = LagoonResult.ok(updatedPhoto);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = new LagoonResult(500, ExceptionUtils.getStackTrace(e), null);
		}
		return result;
	}

	@RequestMapping(value = "/photo/{id}", method = RequestMethod.DELETE)
	public LagoonResult deletePhoto(@PathVariable("id") long photoId) {
		return null;
	}

	@RequestMapping(value = "/photo", method = RequestMethod.POST)
	public LagoonResult uploadPhoto(HttpServletRequest request, HttpServletResponse response) {

		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		Iterator<String> it = multipartRequest.getFileNames();
		MultipartFile multipartFile = multipartRequest.getFile(it.next());

		Pattern compile = Pattern.compile(".*\\.(png|jpg|gif|bmp)$");
		
		Matcher filenameMatcher = compile.matcher(multipartFile.getOriginalFilename());
		
		String fileName = filenameMatcher.find()?filenameMatcher.group(0):"";
		
		int end = fileName.indexOf(".");
		
		fileName = fileName.substring(0, end);
		
		setImageName(fileName);

		try {
			File theFile = new File("target/classes/static/images");
			theFile.mkdirs();
			String path = theFile.getAbsolutePath() + "/" + fileName;
			multipartFile.transferTo(new File(path));
			System.out.println(path);
		} catch (IllegalStateException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return LagoonResult.build(500, ExceptionUtils.getStackTrace(e), null);
		}
		return LagoonResult.ok("Upload Success!");
	}

	@RequestMapping(value = "/photo/add", method = RequestMethod.POST)
	public LagoonResult addPhoto(@RequestBody Photo photo) {
		LagoonResult result = null;
		try {
			String photoName = this.getImageName();
			if (!photoName.trim().isEmpty()) {
				photo.setImageName(photoName);
				Photo savedPhoto = photoService.save(photo);
				return result = LagoonResult.ok(savedPhoto);
			}

			result = new LagoonResult(400, "photo is not yet uploaded", null);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = new LagoonResult(500, ExceptionUtils.getStackTrace(e), null);
		}
		return result;
	}

	public String getImageName() {
		return imageName != null && !imageName.trim().isEmpty() ? imageName : "";
	}

	private void setImageName(String imageName) {
		this.imageName = imageName;
	}
}
