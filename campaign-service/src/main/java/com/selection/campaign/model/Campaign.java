package main.java.com.selection.campaign.model;

import com.selection.campaign.model.Candidate;

import java.util.ArrayList;

public class Campaign {

    private String name;
    private String detail;
    private String expiredDate;
    private String image;
    private ArrayList<Candidate> choices;

    public Campaign(String name, String detail, String expiredDate, String image, ArrayList<Candidate> choices) {
        this.name = name;
        this.detail = detail;
        this.expiredDate = expiredDate;
        this.image = image;
        this.choices = choices;
    }

    public Campaign() {
    }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getDetail() { return detail; }

    public void setDetail(String detail) { this.detail = detail; }

    public String getExpiredDate() { return expiredDate; }

    public void setExpiredDate(String expiredDate) { this.expiredDate = expiredDate; }

    public String getImage() { return image; }

    public void setImage(String image) { this.image = image; }

    public ArrayList<Candidate> getChoices() { return choices; }

    public void setChoices(ArrayList<Candidate> choices) { this.choices = choices; }
}
