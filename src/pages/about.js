import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import profilePic from "../../public/images/profile/sujal-bw.png";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const SpringValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        SpringValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [SpringValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>SujalKalra | about Page</title>
                <meta name="description" content='this is about me' />
            </Head>
            <TransitionEffect/>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className='text-7xl mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium text-sm'>Hi, I&apos;m Sujal, a full-stack developer and AI enthusiast with a passion for building efficient, innovative, and user-focused solutions. With a strong background in algorithms and system design, I'm always exploring new ways to turn ideas into reality.</p>
                            <p className='my-4 font-medium text-sm'>I believe coding is more than just writing programs – it&apos;s about solving problems and building efficient, impactful solutions for users. </p>
                            <p className='font-medium text-sm'>Whether I&apos;m developing algorithms, building AI models, or crafting efficient web applications, I bring my problem-solving mindset and innovation to every project. I look forward to applying my skills and passion to your next challenge.</p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl 
                        border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light xl:col-span-4' />
                            <Image src={profilePic} alt="SUJAL" className='w-full h-auto rounded-2xl' priority sizes='(max-width:768px) 100vh, (max-width:1200px) 50vh,50vh' />
                        </div>


                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end  justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>
                            <div className='flex flex-col items-end  justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={30} />+
                                </span>
                                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end  justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-smf' >Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
}

export default about;
