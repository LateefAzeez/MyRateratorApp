import { observable } from "mobx";
import { AppData } from "./data";

export const Model = observable({
    cardDetails: {
        InstructorSid: "",
        InstructorDetail: "",
        CollegeName: "",
        Rating = "",
        Likes: ""
    }
});

Model.SetCardDetails = function ()
