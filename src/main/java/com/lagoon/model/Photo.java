package com.lagoon.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Photo {
	private long photoId;
	private String photoName;
	private String title;
	private String description;
	private User user;
	private String imageName;
	private List<Comment> commentList;
	private List<User> likedByUsers;
	private int likes;
	private Date createdDate;
	private Date updatedDate;

	public Photo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Photo(String photoName, String title, String description, User user, String imageName) {
		super();
		this.photoName = photoName;
		this.title = title;
		this.description = description;
		this.user = user;
		this.imageName = imageName;
		this.commentList = new ArrayList<Comment>();
		this.likedByUsers = new ArrayList<User>();
		this.likes = 0;

	}

	public long getPhotoId() {
		return photoId;
	}

	public void setPhotoId(long photoId) {
		this.photoId = photoId;
	}

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public List<Comment> getCommentList() {
		return commentList;
	}

	public void setCommentList(List<Comment> commentList) {
		this.commentList = commentList;
	}

	public List<User> getLikedByUsers() {
		return likedByUsers;
	}

	public void setLikedByUsers(List<User> likedByUsers) {
		this.likedByUsers = likedByUsers;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

}
