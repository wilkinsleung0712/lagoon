package com.lagoon.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
public class Photo {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
	private Long photoId;
	private String photoName;
	private String title;
	private String description;
	@ManyToOne
	@JsonBackReference
	private User user;
	private String imageName;
	
	@OneToMany(mappedBy = "photo", fetch = FetchType.EAGER)
	private List<Comment> commentList;
//  @ManyToMany(mappedBy = "likedPhotoList", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//  @JsonIgnore
//  private List<User> likedUserList;
	private int likes;
	@CreationTimestamp
	private Date createdDate;
	@UpdateTimestamp
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
		this.likes = 0;

	}

	public Long getPhotoId() {
		return photoId;
	}

	public void setPhotoId(Long photoId) {
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

//	public List<User> getLikedByUsers() {
//		return likedByUsers;
//	}
//
//	public void setLikedByUsers(List<User> likedByUsers) {
//		this.likedByUsers = likedByUsers;
//	}

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
