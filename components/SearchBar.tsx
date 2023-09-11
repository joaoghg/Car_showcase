"use client"

import React, { useState } from "react";
import { SearchManufacturer } from "@/components/index";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {set} from "zod";
import {Router} from "next/router";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    return (
        <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
            <Image src="/magnifying-glass.svg"
                alt={"indisponível"}
                width={40}
                height={40}
                className="object-contain"
            />
        </button>
    )
}

export default ({ setManufacturer, setModel }: any) => {
    const [searchManufacturer, setSearchManufacturer] = useState('')
    const [searchModel, setSearchModel] = useState('')
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(searchManufacturer === '' && searchModel === ''){
            return alert('Por favor preencha os campos')
        }

        setModel(searchModel.toLowerCase())
        setManufacturer(searchManufacturer.toLowerCase())
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="Model icon"
                />
                <input
                    type="text"
                    name="model"
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    )
}
