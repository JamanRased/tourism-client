import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner1} alt="Srimagal"/>
                    <Carousel.Caption>
                        <h3>Srimagal</h3>
                        <p>শ্রীমঙ্গল শহরের নামকরণশ্রীমঙ্গলের নামকরণ। দু’শ বছরের প্রাচীন শ্রীমঙ্গল শহরের নামকরণ নিয়ে ভিন্ন-ভিন্ন কাহিনী শোনা গেলেও রেকর্ডপত্রে লিপিবদ্ধ আছে- ‘শ্রীদাস’ ও ‘মঙ্গলদাস’ নামে দু’জন প্রথমে এসে এখানে হাইল-হাওরের তীরে বসতি স্থাপন করেছিলেন। এ দু’ভাইয়ের নামানুসারে শ্রীমঙ্গল নামকরণ করা হয় এ জনবসতির। আরেক মহল থেকে বলা হয়েছে, শ্রীমঙ্গল শহরের অদূরে ‘মঙ্গলচন্ডী’ দেবতার একটি স্থলী ছিল।</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-fluid" src={banner2} alt="Ratatgul"/>

                    <Carousel.Caption>
                        <h3>Ratatgul Swamp Forest</h3>
                        <p>রাতারগুল জলাবন সিলেটের গোয়াইনঘাটে অবস্থিত বাংলাদেশের একমাত্র মিঠাপানির জলাবন। ... একে রাতারগুল সোয়াম্প ফরেস্ট হিসাবেও অভিহিত করা হয়ে থাকে। এর ৫০৪ একর এলাকাকে বাংলাদেশ সরকার ১৯৭৩ সালে বন্যপ্রাণীর অভয়ারণ্য হিসেবে ঘোষণা করে।</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner3} alt="LalBag"/>
                    <Carousel.Caption>
                        <h3>LalBag</h3>
                        <p>লালবাগ কেল্লা, মোঘল আমলের বাংলাদেশের একমাত্র ঐতিহাসিক নিদর্শন যাতে একই সাথে ব্যবহার করা হয়েছে কষ্টি পাথর, মার্বেল পাথর আর  রঙ-বেরঙের টালি।লালবাগ কেল্লা ছাড়া বাংলাদেশের আর কোনো ঐতিহাসিক নিদর্শনে এমন কিছুর সংমিশ্রণ পাওয়া যায়নি আজ পর্যন্ত। প্রায় প্রতিদিন হাজারো দেশি-বিদেশি দর্শনার্থীর পদচারণয় মুখরিত হয় ঢাকার লালবাগ এলাকার এই দুর্গটি।</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;