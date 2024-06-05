import Image from "next/image";


const Trade = () => {
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">
            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-2 gap-x-5">
                {/* Column-1 */}
                <div>
                    <Image src={'/images/Trade/macbook.png'} alt="macBook-image" width={787} height={512} />
                </div>

                {/* Column-2 */}

                <div>
                    <h3 className="text-3xl lg:text-4xl font-semibold text-offwhite mb-3 text-center sm:text-start">Why Choose Eurosia App </h3>
                        <ul>
                            <li className="lg:text-lg font-normal text-lightblue mb-1 text-center sm:text-start">  <b>Expertise and Experience</b>: With years of industry experience, we have a deep understanding of technology trends and best practices. Our team stays updated with the latest advancements to provide you with innovative solutions. </li>
                            <li className="lg:text-lg font-normal text-lightblue mb-1 text-center sm:text-start">  <b>Timely Delivery</b>: We understand the importance of meeting deadlines. Our streamlined development process enables us to deliver projects on time without compromising on quality. </li>
                            <li className="lg:text-lg font-normal text-lightblue mb-1 text-center sm:text-start">  <b>Quality and Reliability</b>: We are committed to delivering high-quality solutions that meet the highest standards. Our rigorous quality assurance processes ensure that our products are reliable, secure, and perform optimally. </li>
                        </ul>
                    <div className="flex justify-between">
                        <Image src={'/images/Trade/mac.svg'} alt="macOS-image" width={61} height={105} />
                        <div className="verticalLine"></div>
                        <Image src={'/images/Trade/appstore.svg'} alt="appstore-image" width={80} height={105} />
                        <div className="verticalLine"></div>
                        <Image src={'/images/Trade/windows.svg'} alt="windows-image" width={80} height={105} />
                        <div className="verticalLine"></div>
                        <Image src={'/images/Trade/android.svg'} alt="android-image" width={71} height={105} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;
