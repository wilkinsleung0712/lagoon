package com.lagoon.common;

import java.util.List;
import java.io.IOException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class LagoonResult {

	private Integer status;
	private Object data;
	private String msg;
	private static final ObjectMapper MAPPER = new ObjectMapper();

	public LagoonResult(Integer status, String msg, Object data) {
		this.status = status;
		this.data = data;
		this.msg = msg;
	}

	public LagoonResult(Object data) {
		this.status = 200;
		this.data = data;
		this.msg = "OK";
	}

	public static LagoonResult formatToPojo(String jsonData, Class<?> clazz) {
		try {
			if (clazz == null) {

				return MAPPER.readValue(jsonData, LagoonResult.class);
			}

			JsonNode jsonNode = MAPPER.readTree(jsonData);
			JsonNode data = jsonNode.get("data");

			Object obj = null;
			if (clazz != null) {
				if (data.isObject()) {
					obj = MAPPER.readValue(data.traverse(), clazz);
				} else if (data.isTextual()) {
					obj = MAPPER.readValue(data.asText(), clazz);
				}
				return build(jsonNode.get("status").intValue(), jsonNode.get("msg").asText(), obj);
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static LagoonResult format(String json) {
		try {
			return MAPPER.readValue(json, LagoonResult.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public static LagoonResult formatToList(String jsonData, Class<?> clazz) {

		try {
			JsonNode jsonNode = MAPPER.readTree(jsonData);
			JsonNode data = jsonNode.get("data");
			Object obj = null;

			if (data.isArray() && data.size() > 0) {

				obj = MAPPER.readValue(data.traverse(),
						MAPPER.getTypeFactory().constructCollectionType(List.class, clazz));
			}
			return build(jsonNode.get("status").intValue(), jsonNode.get("msg").asText(), obj);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public static LagoonResult build(Integer status, String msg, Object data) {
		return new LagoonResult(status, msg, data);
	}

	public static LagoonResult ok(Object data) {
		return new LagoonResult(data);
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public static ObjectMapper getMapper() {
		return MAPPER;
	}

}
