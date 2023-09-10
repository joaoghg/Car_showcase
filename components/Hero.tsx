"use client"

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className={'hero'}>
            <div className={"flex-1 pt-36 padding-x"}>
                <h1 className={"hero__title"}>
                    Encontre, reserve, ou alugue um carro - rápido e fácil
                </h1>

                <p className={"hero__subtitle"}>
                    Simplifique sua experiência alugando carros com nosso processo de aluguel
                </p>

                <CustomButton
                    title={"Explorar Carros"}
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src={"/hero.png"} alt={"hero"}
                        fill className={"object-contain"}/>
                </div>
                <div className={"hero__image-overlay"} />
            </div>
        </div>
    )
}

export default Hero
