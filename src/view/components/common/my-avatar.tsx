import { cn } from "@/utils/style.util"

export const MyAvatar = ({
    imgPath,
    variant,
    className,
}: {
    imgPath: string
    variant: "xs" | "md" | "lg"
    className?: string
}) => {
    return (
        <>
            {variant === "xs" && (
                <div className="h-10 w-10 rounded-full">
                    <img
                        src={imgPath}
                        alt="Image not loaded!"
                        className={cn(`h-10 w-10 rounded-full object-cover bg-gray-50`, className)}
                    />
                </div>
            )}

            {variant === "md" && (
                <div className="h-16 w-16 rounded-full">
                    <img
                        src={imgPath}
                        alt="Image not loaded!"
                        className={cn(`h-16 w-16 rounded-full object-cover bg-gray-50`, className)}
                    />
                </div>
            )}

            {variant === "lg" && (
                <div className="h-32 w-32 rounded-full">
                    <img
                        src={imgPath}
                        alt="Image not loaded!"
                        className={cn(`h-32 w-32 rounded-full object-cover bg-gray-50`, className)}
                    />
                </div>
            )}
        </>
    )
}
