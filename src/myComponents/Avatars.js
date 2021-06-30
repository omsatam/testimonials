import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Avatar } from "@material-ui/core";
import "./Avatars.css";
import Testimonials from "./Testimonials";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'


function Avatars() {
    const [data, setData] = useState(null)
    const [activeComponent, setActiveComponent] = useState(null)


    useEffect(() => {
        async function fetchData() {
            let request = await axios.get("https://testimonialapi.toolcarton.com/api");
            setData(request.data)
            // console.log(data)
        }
        fetchData();
        if (data){
        var current = document.getElementsByClassName("active");
        }


        if (data && current) {
            setActiveComponent(current[0].id)
        }

        let avatars = document.getElementsByClassName("avatars__avatar");
        for (let i = 0; i < avatars.length; i++) {
            avatars[i].addEventListener("click", function () {
                console.log(current)
                if (current.length !== 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
                setActiveComponent(this.id)
            })
        }

        document.getElementById("before").addEventListener("click", function () {
            if (data && current[0]) {
                
                let previousAvatar = parseInt(current[0].id) - parseInt(1)
                setActiveComponent(previousAvatar)
                if (current.length !== 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                document.getElementById(previousAvatar).className += " active"
                
            }
        })

        document.getElementById("next").addEventListener("click", function () {
            if (data) {
                console.log(current)
                let nextAvatar = parseInt(current[0].id) + parseInt(1)
                setActiveComponent(nextAvatar)
                if (current.length !== 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                document.getElementById(nextAvatar).className += " active"
            }
        })

        return () => {
            fetchData()
        }

    }, [data])

    return (
        <>
            {data && <Testimonials data={data} activeComponent={activeComponent} />}
            <div className="avatars">
                {data?.map((person) => (
                    <Avatar id={person.id} key={person.id} onClick={null} className={`avatars__avatar ${person.id === 1 && "active"}`} src={person.avatar} />
                ))}
            </div>
            < NavigateBeforeIcon id="before" />
            <NavigateNextIcon id="next" />
        </>
    )
}

export default Avatars