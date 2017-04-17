package com.lagoon.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lagoon.common.LagoonResult;
import com.lagoon.model.Photo;

@RestController
@RequestMapping("/api")
public class PhotoController {

	@RequestMapping(value="/photos/getPhotoList",method=RequestMethod.GET)
	public LagoonResult getAllPhotos(){
		return null;
	}
	
	@RequestMapping(value="/photo/{id}",method=RequestMethod.GET)
	public LagoonResult getPhoto(@PathVariable long photoId){
		return null;
	}
	
	@RequestMapping(value="/photo",method=RequestMethod.PUT)
	public LagoonResult editPhoto(@RequestParam Photo photo){
		return null;
	}
	
	@RequestMapping(value="/photo/{id}",method=RequestMethod.DELETE)
	public LagoonResult deletePhoto(@PathVariable("id") long photoId){
		return null;
	}
}
