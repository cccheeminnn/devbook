package vttp2022.batch1.csfproject.devbookbackend.models;

import java.io.StringReader;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

public class UserComment {

    private String email;
    private String id;
    private String name;
    private String text;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public JsonObject toJson(){
        return Json.createObjectBuilder()
            .add("email", email)
            .add("id", id)
            .add("name", name)
            .add("text", text)
            .build();
    }

    public static UserComment createFromPayload(String payload) {
        JsonReader reader = Json.createReader(new StringReader(payload));
        JsonObject obj = reader.readObject();

        UserComment comment = new UserComment();
        comment.setEmail(obj.getString("email"));
        comment.setId(obj.getString("id"));
        comment.setName(obj.getString("name"));
        comment.setText(obj.getString("text"));

        return comment;
    }
}
