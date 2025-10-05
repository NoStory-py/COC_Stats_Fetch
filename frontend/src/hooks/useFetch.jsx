import React, { useEffect, useState } from 'react'
import axios from "axios"

export const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [choice, setChoice] = useState(null);

    const fetchStats = async (option, tag) =>{
        setLoading(true);
        setError(null);
        setChoice(option);
        try{
            const response = await axios.get(`http://localhost:8080/api/${option}/${tag}`);
            setData(response.data);
            console.log(response.data);
        } catch(err){
            setError(err);
        } finally{
            setLoading(false);
        }

    }

    return { data, loading, error, fetchStats, choice};

}

