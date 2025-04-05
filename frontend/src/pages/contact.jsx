import React from "react";
import Drafts from '@mui/icons-material/Drafts';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';




const Contact = () => {
    return (
        <>
            <section className="relative  overflow-hidden bg-white lg:py-20 dark:bg-dark  lg:px-20">
                <div className="container">
                    <div className="lg:mx-4 flex flex-wrap lg:justify-between ">
                        <div className="w-full lg:px-4 lg:w-1/2 xl:w-6/12 px-10 ">
                            <div className="mb-12 max-w-[570px] lg:mb-0">
                                <span className=" block  text-3xl font-semibold text-primary">
                                    Contact Us
                                </span>
                                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                    GET IN TOUCH WITH US
                                </h2>
                                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                                    enim adiqua minim veniam quis nostrud exercitation ullamco
                                </p>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 bg-blue-100 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-2xl text-primary sm:h-[70px] sm:max-w-[70px]">
                                        <LocationOn className="text-blue-600 " />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-dark">
                                            Our Location
                                        </h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 bg-blue-100 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-2xl  text-primary sm:h-[70px] sm:max-w-[70px]">
                                       <Phone className="text-blue-600"/>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-dark">
                                            Phone Number
                                        </h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            (+62)81 414 257 9980
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex w-full max-w-[370px] ">
                                    <div className="mr-6 bg-blue-100 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-2xl bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                        <Drafts className="text-blue-600 "/>
                                    </div>
                                    <div className="w-full ">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-dark">
                                            Email Address
                                        </h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            info@yourdomain.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                                <form>
                                    <ContactInputBox
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                    />
                                    <ContactInputBox
                                        type="text"
                                        name="email"
                                        placeholder="Your Email"
                                    />
                                    <ContactInputBox
                                        type="text"
                                        name="phone"
                                        placeholder="Your Phone"
                                    />
                                    <ContactTextArea
                                        row="6"
                                        placeholder="Your Message"
                                        name="details"
                                        defaultValue=""
                                    />
                                    <div>
                                        <button
                                            type="submit"
                                            className=" bg-blue-400 hover:bg-blue-700 w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    defaultValue={defaultValue}
                />
            </div>
        </>
    );
};

const ContactInputBox = ({ type, placeholder, name }) => {
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
            </div>
        </>
    );
};
