import express from "express";
import { createHotel, deleteHotel, getHotels, getHotel, updateHotel, countByCity, countByType, getHotelRooms } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router= express.Router();
//create
router.post("/",verifyAdmin, createHotel);
//update
router.put("/:id",verifyAdmin,updateHotel);
//delete
router.delete("/:id",verifyAdmin,deleteHotel);
//get
router.get("/find/:id",getHotel);
//getall
router.get("/",getHotels );

router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id",getHotelRooms);


export default router;