export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-24 py-4 space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-2xl md:text-6xl lg:text-8xl max-w-[100px] text-mainColor font-semibold text-center md:text-left">
                Journey with Cloud Innovators
            </p>
            <img src="https://mainillc.com/images/about-banner-img.png" className="w-1/2 hidden md:block h-full" alt="Cloud Innovators Banner" />
        </div>
    );
}
