package com.lagoon.model;

import java.util.Date;

public class Comment {
	private long commentId;
	private String content;
	private String userName;
	private Photo photo;
	private Date createdDate;
	private Date updatedDate;
	
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Comment(String content, String userName, Photo photo) {
		super();
		this.content = content;
		this.userName = userName;
		this.photo = photo;
	}

	public long getCommentId() {
		return commentId;
	}

	public void setCommentId(long commentId) {
		this.commentId = commentId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Photo getPhoto() {
		return photo;
	}

	public void setPhoto(Photo photo) {
		this.photo = photo;
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
