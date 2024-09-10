"use client"
import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = ["Effortless sales at your fingertips. Introducing your AI-driven sales ally, streamlining lead generation, vetting prospects, and tailoring interactions, freeing you to excel at sealing the deal."]

export default function Index() {

    return (
        <div className={styles.description} >
            {
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

function AnimatedText({ children }) {
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])



    return (
        <div className={styles.animatedTextContainer}>
            {/* Buttons with animation on hover */}
            <div className={styles.buttonContainer}>
                <button className={styles.button}> Get a Call Demo
                </button>
                <button className={styles.button}> Book a Call Appointment
                </button>
            </div>
            {/* Animated Text */}
            <p ref={text}>{children}</p>
        </div>
    )
}