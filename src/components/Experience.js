import React, { useRef } from 'react';
import { motion,useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5 , type:"spring"}}>
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}
                    &nbsp;
                    <a
                        href={`https://${companyLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary capitalize dark:text-primaryDark"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end","center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Full Stack Developer"
                        company="Crypto Screener"
                        companyLink="https://github.com/sujalkalra"
                        time="2024–Present"
                        address="Remote"
                        work="Worked on a team responsible for building a crypto screener web app, including real-time data display, filtering by market stats, and integrating secure authentication and state management."
                    />
                    <Details
                        position="Frontend Developer"
                        company="Personal Portfolio"
                        companyLink="https://github.com/sujalkalra"
                        time="2024"
                        address="Remote"
                        work="Worked on a team responsible for creating a personal web portfolio, including implementing rotating skill icons, neon styling, animated elements, and optimizing for responsiveness."
                    />
                    <Details
                        position="Backend Developer"
                        company="INChat Abuse Detector"
                        companyLink="https://github.com/sujalkalra"
                        time="2024"
                        address="Remote"
                        work="Worked on a team responsible for building an abuse detection system, including creating a fuzzy text matcher using Python and FuzzyWuzzy, and implementing backend logic for chat filters."
                    />
                    <Details
                        position="Software Developer"
                        company="Realtime Guestbook"
                        companyLink="https://github.com/sujalkalra"
                        time="2023"
                        address="Remote"
                        work="Worked on a team responsible for creating a live guestbook using Supabase, including real-time data updates, frontend rendering with FastHTML, and user feedback tracking features."
                    />
                    <Details
                        position="Tech Mentor"
                        company="VIT-AP Coding Club"
                        companyLink="https://www.linkedin.com/in/sujal-kalra-660190252/"
                        time="2023–Present"
                        address="VIT-AP, Amaravati"
                        work="Assisted students in learning DSA and Python, held sessions on core CS concepts, and guided juniors on building projects and preparing for coding contests and technical interviews."
                    />
                    <Details
                        position="Award Winner"
                        company="Inter-University Contest"
                        companyLink="https://www.linkedin.com/in/sujal-kalra-660190252/"
                        time="2024"
                        address="VIT-AP, Amaravati"
                        work="Won 2nd prize in an inter-university debugging contest, received the 'Fast Debugger' title for quickly resolving bugs under pressure, showcasing strong debugging and logic skills."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
