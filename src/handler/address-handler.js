import { supabase } from "../config.js";
import { nanoid } from "nanoid";
import { getUserIdFromRequest } from "../utils/auth.js";

export const addAddress = async (request, h) => {
    try{
        const id_address = nanoid(16)
        const user_id = getUserIdFromRequest(request)
        const { country, province, regency_city, subdistrict, village, street_name, house_number, postal_code } = request.payload

        const { error } = await supabase.from('address').insert([{
            id_address,
            country, 
            province, 
            regency_city, 
            subdistrict, 
            village, 
            street_name, 
            house_number, 
            postal_code,
            user_id
        }])

        if(error) return h.response({error: error.message}).code(400)
        
        return h.response({message: 'Berhasil menambahkan alamat'}).code(200)
    } catch(error){
        return h.response({error: error.message}).code(400)
    }
}

export const getAddress = async (request, h) =>{
    try{
        const user_id = getUserIdFromRequest(request)
        const { data, error } = await supabase
            .from('address')
            .select(' country, province, regency_city, subdistrict, village, street_name, house_number, postal_code')
            .eq('user_id', user_id)
            .single();
        if(error) return h.response({error: error.message}).code(400)
        return h.response(data).code(200)
        
    } catch(error){
        return h.response({error: error.message}).code(400)
    }
}

export const putAddress = async (request, h) =>{
    try{
        const user_id = getUserIdFromRequest(request)
        const { country, province, regency_city, subdistrict, village, street_name, house_number, postal_code } = request.payload
        
        const updateData = {};
        if (country !== undefined) updateData.country = country;
        if (province !== undefined) updateData.province = province;
        if (regency_city !== undefined) updateData.regency_city = regency_city;
        if (subdistrict !== undefined) updateData.subdistrict = subdistrict;
        if (village !== undefined) updateData.village = village;
        if (street_name !== undefined) updateData.street_name = street_name;
        if (house_number !== undefined) updateData.house_number = house_number;
        if (postal_code !== undefined) updateData.postal_code = postal_code;

        const { data, error } = await supabase
            .from('address')
            .update(updateData)
            .eq('user_id', user_id)
            
        if(error) return h.response({error: error.message}).code(400)
        return h.response('Address berhasil di update').code(200)
    } catch(error){
        return h.response({error: error.message}).code(400)
    }
}