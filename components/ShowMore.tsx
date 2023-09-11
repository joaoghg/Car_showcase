"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import { CustomButton } from "@/components";
import { updateSearchParams } from "@/utils";

export default ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;

        setLimit(newLimit)
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title={"Ver mais"}
                    btnType={"button"}
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}
