'use client';
import React from 'react';
import { motion } from 'framer-motion';

const OurServices = () => {
    const services = [
        {
            title: "Learn Physics",
            description: "Master the concepts of Physics with detailed explanations, problem-solving techniques, and practical experiments. Ideal for SSC, HSC, and university students.",
            icon: "🧲",
            image: "https://www.vedantu.com/seo/content-images/bc692335-2c03-4559-9cf0-dff766298eef.jpg",
        },
        {
            title: "Learn English",
            description: "Improve your English skills with grammar lessons, vocabulary building, and speaking practice. Suitable for academic and professional purposes.",
            icon: "🗣️",
            image: "https://idc.edu/wp-content/uploads/2018/03/8-Ways-to-Learn-English-Faster.webp",
        },
        {
            title: "Learn Biology",
            description: "Explore the world of life sciences with comprehensive biology lessons, covering genetics, physiology, and ecology. Suitable for SSC, HSC, and medical students.",
            icon: "🌱",
            image: "https://www.scotthyoung.com/blog/wp-content/uploads/2021/01/biology.png",
        },
        {
            title: "Learn Chemistry",
            description: "Understand chemical reactions, organic chemistry, and lab experiments with our interactive modules and practical problem-solving.",
            icon: "🧪",
            image: "https://bright-culture.com/wp-content/uploads/2021/06/learn-chemistry-optimized.jpg",
        },
        {
            title: "Learn Mathematics",
            description: "Build a strong foundation in algebra, geometry, calculus, and statistics. Perfect for SSC, HSC, and university students.",
            icon: "➗",
            image: "https://ed.stanford.edu/sites/default/files/styles/free_crop_original/public/news_images/math2.jpeg?itok=DzVqrTRx",
        },
        {
            title: "Learn Accounting",
            description: "Master the principles of accounting, financial statements, and bookkeeping practices. Essential for Commerce students.",
            icon: "📊",
            image: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/business-professional-learning-accounting.jpeg&w=1200&h=630",
        },
        {
            title: "Learn Agriculture",
            description: "Gain knowledge in modern farming techniques, crop production, and agricultural management. Ideal for vocational students and professionals.",
            icon: "🌾",
            image: "https://gla.ac.in/blog/wp-content/uploads/2023/09/web-blog-7-Awesome-Things-You-Can-Learn-from-Studying-Agriculture.jpg",
        },
        {
            title: "Learn History",
            description: "Dive into the past and explore historical events, ancient civilizations, and world history. Great for Arts students.",
            icon: "📜",
            image: "https://www.mooc.org/hubfs/history.jpg",
        },
        {
            title: "Learn Economics",
            description: "Understand the basics of economics, microeconomics, macroeconomics, and their applications in the real world.",
            icon: "💰",
            image: "https://www.econlib.org/wp-content/uploads/2023/11/learn-economics.jpg",
        },
        {
            title: "Learn Bengali Literature",
            description: "Explore the rich heritage of Bengali literature, poetry, and prose with expert guidance and engaging content.",
            icon: "📖",
            image: "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2022/03/How-to-learn-Bengali-language.jpg?fit=1280%2C720&ssl=1",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
                    Explore Our Learning Subjects
                </h2>
                <motion.div
                    className="space-y-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:gap-12`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.img
                                src={service.image}
                                alt={service.title}
                                className="w-full md:w-1/2 rounded-lg shadow-md"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            />
                            <div className="text-center md:text-left mt-6 md:mt-0">
                                <div className="text-4xl text-purple-600 mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-semibold text-purple-600 mb-4">{service.title}</h3>
                                <p className="text-lg text-gray-700 mb-4">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurServices;
