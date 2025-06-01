import { rootHandler } from "../handler/root-handler.js";
import { addAddress, getAddress, putAddress } from "../handler/address-handler.js";
import { registerHandler, loginHandler, logoutHandler } from "../handler/auth-handler.js";
import { addPredictionHandler, getPredictionHandler, getPredictionDetailHandler, deletePredictionHandler } from "../handler/prediction-handler.js";
import { addProfileHandler, getProfileHandler, putProfileHandler } from "../handler/profile-handler.js";

const routes = [
    {
        method: "GET",
        path: "/",
        handler: rootHandler
    },

    //======================= Auth ===========
    {
        method: "POST",
        path: "/register",
        handler: registerHandler
    },
    {
        method: "POST",
        path: "/login",
        handler: loginHandler
    },
    {
        method: "POST",
        path: "/logout",
        handler: logoutHandler
    },

    //===================== Profil ============
    {
        method: "GET",
        path: "/profile",
        handler: getProfileHandler
    },
    {
        method: "POST",
        path: "/profile",
        handler: addProfileHandler
    },

    {
        method: "PUT",
        path: "/profile",
        handler: putProfileHandler
    },

    //===================== Predict ==============
    {
        method: "GET",
        path: "/predict",
        handler: getPredictionHandler
    },
    {
        method: "GET",
        path: "/predict/{id}",
        handler: getPredictionDetailHandler
    },
    {
        method: "POST",
        path: "/predict",
        handler: addPredictionHandler
    },
    {
        method: "DELETE",
        path: "/predict/{id}",
        handler: deletePredictionHandler
    },

    //====================== Address
        {
        method: "GET",
        path: "/address",
        handler: getAddress
    },
    {
        method: "POST",
        path: "/address",
        handler: addAddress
    },

    {
        method: "PUT",
        path: "/address",
        handler: putAddress
    },
]

export default routes;