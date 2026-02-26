import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const ShayariData = [
     `Main Tumhe Paana Chahta Hoon
      Apna Muqadar Banana Chahta Hoon
      
      Karte Honge Bohot Log Mohabbat Tumse
      Main Tumse Ishq Nibhana Chahta Hoon
      
      Batana Chahta Hoon Kitne Khaas Ho Tum
      Door Hokar Bhi Dil ke Paas Ho Tum
      
      Batana Chahta Hoon Bohot Yaad Aate Ho
      Mere Lehze Mein Banke Awaaz Aate Ho
      
      Batana Chahta Hu Bohot Zaroori Ho Tum
      Mujhe Pasand Ho Aur Puri ki Puri Ho Tum.. :)`,

     
     
     `Me Jaakar Ab Girje Bhi Dekh Aaya Hu
      Me Jaakar Ab Gurudware Bhi Dekh Aaya Hu
      
      Baandh Aaya Hu Ped Par Dhaaga Tere Naam Ka
      Me Ab Mandir Me Maatha Bhi Tek Aaya Hu
      
      Mere Kar Liye Hai Har Jatan Tujhe Paaane Ke
      Me Mazaar Par Chdha Kar Chaadar Ek Aaya Hu
      
      Mene Tute Taaro Se Maanga Hai Tujhko
      Me Ek Sikka Bhi Kue Mai Fek Aaya Hu
      
      Bau Ek Baar Tu Mujhko Ho Jaye Haasil
      Tere Liye Me Chuda Or Kangan Dono Lekar Aaya hu.. :)`,

      

     `Ibadat Karta Hu Tumhari 
      Tum Peer Hu
      
      Raanja Bna Betha Hu Tumhara
      Tum Heer Ho
      
      Pyasa Betha Hu Tumhare Liye
      Tum Neer Ho
      
      Seene Ko Cheer Kar Mere Dil Tak Ho Pohonche
      Tum Teer Ho
      
      Me Gulaam Tumhare Har Ishaaro Ka
      Tum Meer Ho
      
      Sab Khoya Tumhe Paakar Mene
      Tum Taqdeer Ho
      
      Bhatakta Firta Hu Tumhare Bin Dar-Badar
      Tum Zameer Ho
      
      Baand Kar Rakh Tumne Apne Khayalo Me
      Tum Zanjeer Ho
      
      Na Ho Agar Tum Zindagi Me To Kangla Sa Me
      Tum Jageer Ho
      
      Khubsurat Itni Ki Lad Jaye Do Desh Tumhare Liye
      Tum Kashmeer Ho.. :)`,


     
     `Kese Batau Me Tumhe Mere Liye Tum Kon Ho
      Kese Batau Me Tumhe
      
      Tum Dhadkno Ka Geet Ho
      Jeevan Ka Tum Sangeet Ho
      
      Tum Zindagi 
      Tum Bandagi
      Tum Roshni 
      Tum Tazgi
      Har Khushi, Pyaar Ho
      Preet Ho
      Manmeet Ho
      
      Aankho Me Tum
      Yaadon Me Tum
      Neendo Me Tum
      Khwabo Me Tum
      
      Tum Ho Meri Har Baat Me
      Tum Ho Mere Din Raat Me
      
      Tum Shubh Me
      Tum Shaam Me
      Tum Soch Me
      Tum Kaam Me
      
      Mere Liye Pana Bhi Tum
      Mere Liye Khona Bhi Tum
      Mere Liye Hasna Bhi Tum
      Mere Liye Rona Bhi Tum
      Or Jaagna Sona Bhi Tum
      
      Jaau Kahi Dekhu Kahi
      Tum Ho Vaha, Tum Ho Vahi
      
      Kese Batau Me Tumhe
      Tum Bin Me T Kuch Bhi Nahi.. :)`,


     
     `Jab Bhi Tera Gam Mujhme Jma Ho Jata Hai
      Har Gehra Sher Jane Kyu Mera Ho Jata Hai
      
      Tum Mujhe Un Dino Me Bohot Yaad Aati Ho
      Jin Dino Mera Rango Se Saamna Ho Jata Hai.. :)`,



//   `Teri Aankho Ke Saamne Ye Shehar Kon Dekhega
//    Tu Dariya Si Hai Ye Lahar Kon Dekhega,

//    Tu Khubsurat Se Bhi Jyada Khubsurat Hai
//    Tujhe Dekhne Ke Baad Ye Tajmahal Kon Dekhega.. :)`,
  
  
  
//   `Kar Sake Jo Muqabala Teri Saadgi Ka
//    Chaand Me Wo Husn-O-Jamaal Kahan,
   
//    Har Phool Ki Qismat Itni Achi Nahi
//    Har Phool Ki Qismat Me tere Baal Kahan.. :)`,


  
//   `Safar Wahi Tak Jaha Tak Tum Ho
//    Nazar Vahi Tak Jaha Tak Tum Ho,

//    Hazaaro Phool Dekhe Hain Is Gulshan Me Magar
//    Khushboo Wahi Tak Hai Jaha Tak Tum Ho.. :)`,


  
//   `Mere Liye Zindagi Ka Matlab Tum Ho
//    Meri Har Hasrat Ka Matlab Tum Ho,
   
//    Mujhe Maloom Nahi Mohobbat ka Matlab
//    Mere Liye Mohobbat Ka Matlab Tum Ho,
   
//    Khubsurati Ka Matlab Hota Hai Chaand
//    Mere Liye Chaand Ka Matlab Tum Ho,
   
//    Mere Liye Nashe Ka Matlab Hai Teri Aankhe
//    Mere Liye Sharaab Ka Matlab Tum Ho.. :)`,




//  `Tujhe Yaad Na Karu To Aur Kya Karu
//   Teri Baat Na Karu To Aur Kya Karu,
  
//   Kya Karu Ki Mujhe Mil Jaye Tu
//   Ibadat Karu ? Dua Karu ? Kya Karu ?,
  
//   Kya Karu Ki Bas Tere Saath Jeena Tha
//   Ab Tere Bagair Na Maru To Kya Aur Karu,
  
//   KyaKkaru Ki Tu Bhi Kab Sunta Hai Meri
//   Tujhse Shikayat Na Karu To Aur Kya Karu,
  
//   Kya Karu Ki Tu Bhi Itna Pyaara Hai
//   Tujhse Mohobbat Na Karu To Aur Kya Karu.. :)`, 


 
//  `Agar Tum Baarish Ho
//   To Me Bheegna Chahoon,
  
//   Agar Tum Dhoop Ho
//   To Me Jalna Chahoon,
  
//   Agar Tum Samandar Ho
//   To Me Doobna Chahoon,
  
//   Agar Tum Zindagi Ho
//   To Me Jeena Chahoon,
  
//   Agar Tum Zeher Ho
//   To Me Peena Chahoon,
  
//   Agar Tum Maut Ho
//   To Me Marna Chahoon.. :)`,



//  `Tum Wo Chaand Ho Jispar Koi Daag Nahi
//   Tum Itni Khubsurat Ho Jiska Koi Hisab Nahi,
  
//   Tum Wo Nadi Ho Jo Apni Marzi Se Behti Hai
//   Tum Wo Baag Ho Jisme Titliya Rehti Hai,
  
//   Tum Wo Phool Ho Jo Kabhi Murjhata Nahi
//   Tum Wo Rang Ho Jo Kabhi Utarta Nahi,
  
//   Tum Wo Nadi Ho Jisme Chaand Nahata Hai
//   Tum Wo Ho Jisse Chaand Bhi Sharmata Hai,
  
//   Tum Wo Suraj Ho Jo Thandak Pohnchata Hai
//   Tum Wo Raasta Ho Jo Jannat Tak Jata Hai.. :)`,



//  `Tujhe Me Sochta Raha Raat Bhar
//   Apni Aankho Ko Nochta Raat Bhar,
  
//   Me Raat Ko Teri Tasvir Dekhta Raha
//   Teri Tasvir Mujhe Dekhti Rahi Raat Bhar,
  
//   Tere Milne Ka Mujhe Nahi Pata Lekin
//   Tujhe Khuda Se Maangta Raha Raat Bhar,
  
//   Tu So Gaya Apni Duniya Me Kho Gaya
//   Me Tere Liye Jaagta Raha Raat Bhar,
  
//   Andhere Me Bhi Roshan Tha Kamra Mera
//   Tere Liye Ye Dil Jalta Raha Raat Bhar,
  
//   Tujhe Shayad Pata Na Ho Magar Sach Hai
//   Teri Yaad Se Me Baat Karta Raha Raat Bhar,
  
//   Chahe To Uss Chaand Se Puch Le
//   Tujhe Taaro Me Dhundta Raha Raat Bhar,
  
//   Saanso Ki Tarah Tujhe Bharta Raha Apne Andar
//   Aur Meri Saans Mujhse Juda Rahi Raat Bhar.. :)`,

  
 

//  `Teri Aankho Me Dekhu To Kahi Kho Jata Hu
//   Jee Bhar Kar Tujhe Dekh Nahi Pata,
  
//   Tujhe Na Dekhu To Rehta Hu Bechain
//   Tu Dikh Jaye To Paas Aane Se Khud Ko Rok Nahi Pata,
  
//   Me Chahta Hu Padhna Teri Aankho Ko
//   Par Unhe Dekh Ke Me Kuch Soch Nahi Pata,
  
//   Teri Aankho Me Dekhu To Kahi Kho Jata Hu
//   Jee Bhar Kar Tujhe Kabhi Dekh Nahi Pata.. :)`,



//   `Tum Jo Chhu Lo Usme Jivan Bhare
//    Phool Khushbu Ko Teri Ye Kabse Khade,

//    Maasumiyat Bhi Karti Hai Rasq Aap Par
//    Aaina Bhi Hai Dekho Fidaa Aap Par,

//    Khubsrati To Deti Misale Teri
//    Hyaa Dekh Kese Nazre Utare Teri,

//    Khil Uthe Duaa Jo Tujhe Maang Lu
//    Itni Pyari Hai Sundar Hai Masoom Tu,

//    Chaand Raate Jage Tere Didar Ko
//    Taare Aanhe Bhare Tere Didar Ko,

//    koyle'n Bhi To Chahti Hai Sunna Tujhe
//    Khil Uthe Phool Sare Tu Jb Jb Hase
//    Jaha'n Nazrein re Vaha'n Barish Pade,

//    Titliya Tere Haatho Ki Kathputliyaa
//    Mor Nache Bajaye Tu Jab Taliyaa,

//    Kisi Devi Ki Maano Murat Hai Tu
//    Khubsurati Ki Pehli Surat Hai Tu.. :)`,


  
//   `Teri Aankhe Jese Mausam Hai
//    Kudrat Sa Tera Chehra Hai,

//    Laakh Dilo Se Ho Krke Ye Dil Tujhpe Hi Thehra Hai,

//    Jb Tu Dekhkr Mujhko Dheere Se Muskura Deti Hai
//    Meri Nazre Teri Nazron Ko Haule Se Smjha Deti Hai,

//    Smjh Na Pata Hai Ye Dil Ye To Andha Or Behra Hai,
//    Teri Aankhe Jese Mausam Kudrat Sa Tera Chehra Hai.. :) `,

   
  

//   `Are Vo Chand Bhi Tumhare Saamne Sada Lage
//    72 Hoorein Feeki Tumhara Noor Zyada Lage,

//    Aur Mat Pucha Karo Ki Kesi Lagti Ho Tum Hame
//    Meri Jaan Tum To Esi Lgti Ho Jese Swayam Kanha Ko Radha Lge.. :)`,

   
  

//  `Pehli Baar Jo Tujhse Ki Thi Vo Baat Yaad Hai,
//   Teri Yaad Me Guzari Vo Raat Yaad Hai..
  
//   Yaad Hai Mujhe Teri Vo Jheel Si Aankhe,
//   Fool Se Bhi Khubsurat Tere Vo Haath Yaad Hai..
  
//   Yaad Hai Mujhe Vo Tera Baat Karte Karte So Jana,
//   Dur Hote Hue Bhi Ek Dusre Me Kho Jana..
  
//   Yaad Hai Mujhe Aaj Bhi Vo Sb Tere Nakhre,
//   Mujhse Baat Na Ho To Tera Khana Na Khana..
  
//   Kaise Kiya Tha Mene Tujhse Izhaar Yaad Hai,
//   Har Pal Kiya Jo Tera Vo Intezaar Yaad Hai..
  
//   Ha Me Tujhe Bhul Gya Hu Shayad, Magar
//   Mujhe Aaj Bhi Hamara Vo Pyaar Yaad Hai.. :)`,


  
//  `Log Bashte Hai Samandar Se Lekin
//   Hum Tumhari Aankon Me Dubne Ko Tyaar Hai,

//   kisko Dekhne Ki Chahat Kre
//   Tukmo Dekh Liya Hai To,

//   Tumhari Zulfon Ki Gehrai Hai Bohot Or
//   Hmko Pasand Nahi Aata Hai Kinara,

//   Log Kehte Hai Chaand Ka Tukda Ho Tum
//   Hum Kehte Hai Chaand Bhi Tukda Hai Tumhara.. :)`,



//  `Mana Ke Tere Dil Me Koi Or Makii Hai
//   Tu Fir Bhi Mera Dil Hai, Akiida Hai, Yakii Hai,
 
//   Ye Aaine Tujhe Teri Khabar De Na Sakenge
//   Aa Dekh Meri Aankho Se Tu Kitna Hasee Hai.. :)`,



//  `Mujhe Khwahish Hai Teri Aankho Me Kajal Lagane Ki
//   Mujhe Khwahish Hai Tere Pairo Par Payal Sajane Ki,

//   Tere Haatho Me Kangan Pehnane Ki
//   Tere Maathe Pr Bindi Lgane Ki
//   Tujhe Sara Shringaar kara Kr Aaina Dikhane Ki,

//   Khubsurat To Be-Intehaa Hai Tu
//   Mujhe Bas Khwahish Hai Teri Khubsurati Badhane Ki,

//   Mohobbat Karta Hu Thodi Purani
//   Is Genz Jamane Me Khwahish Hai Tujhe Apna Saathi Bnane Ki.. :)`,



//  `Chaand Sitare Phool Parinde Shaam Sawera Ek Taraf
//   Saari Duniya Uska Charba Uska Chehra Ek Taraf,
  
//   Vo Lad Kar So Bhi Jaye To Uska Maatha Chumu Me
//   Usse Mohobbat Ek Taraf Hai Usse Jhagda Ek Taraf,

//   Jis Shay Par Vo Ungali Rakh De Usko Vo Dilwani Hai
//   Uski khushiya Sab Se Awwal Sasta Mehnga Ek Taraf,

//   Saari Duniya Jo bhi Bole Sab Kuch Shor Sharaba Hai
//   Sab Ka Kehna Ek Taraf Hai Uska Kehna Ek Taraf,

//   Jakhmo Par Marham Lagvao Lekin Uske Haathon Se
//   Chaara-Saaji Ek Taraf Hai Uska Chhuna Ek Taraf,

//   Usne Saari Duniya Maangi Mene Usko Maanga Hai
//   Uske Sapne Ek Taraf Hai Mera Sapna Ek Taraf.. :)`


//  `Hey!

//   Ummeed h tum apni zindagi me khush hogi or me bhi yahi chahta hu ki tum khush hi raho
//   Pr ab shayad tume mere bare me sochti ho ya na sochti pr me tumhe jb bhi yaad krta hu
//   To mera dil bohot khsuh ho jata h or meri isi khushi ki vajah se me tumhe kabhi yaad karna nhi chhod pata hu
//   Kya kru ye mano kehta rhta ho ki mat bhool use
//   Fir me tumhe jb bhi yaad karta hu tu mujhe vo sab yaad aa jata h to hamne time spend kiya tha
//   Tumhare saath ghumne jana mana ki hum jyada ghume nhi h saath me but mere liye utha hi kaafi bada moment tha
//   Tumhara vo call krna. Tumhara mujhe block kr dena fir mera naraz ho jana
//   Sach batau to tum jb jb mujhe block karti thi to mujhe lgta tha ki ab to mera chapter close h tumhari life se
//   But fir tum mujhe unblock krke msg krti thi to mujhe saans me saans aati thi or gussa bhi aata tha mujhe tum pr
//   But fir tumse baat krke me bhul jata tha ki me tumse gussa bhi hu 😅
//   Or sabse jyada pasand to mujhe tumhari aawaz lagti thi lagti h or lagti rhegi
//   Kyuki tumhari aawaz mere kaano me jese mithaas ghol deti thi
//   Isiliye mene tumhari call recording tak save kri hui thi taaki tumhari aawaz sun sku me
//   Pr uss din mene tumhari photos ke saath sb kuch delete kr diya
//   Kyuki tumne iss tarah se kaha hi tha ki me nahi chahti ki meri photos kisi ke phone me rahe
//   Fir mene tumhari saari nishaani mita di Tumhari photos Hamari photos, videos, call recordings
//   Or jb jb tumne mujhe snapchat pe add friend kiya tha vo bhi save kr rkha tha mene G-mail me vo bhi sb delete kr diya
//   Tumhari uss ek baat ki vjh se
  
//   Pr kher chhodo ye sb baate me tumhari burai nhi kr rha hu 😅
  
//   Me to bss itna kehna chahta tha ki me tumhe dost ki nazar se nhi dekh skta hu me kitni bhi kosis kr lu
//   Uss din to mene pta nhi kese keh diya tha ki jo bhanu tumse pyaar krta tha vo ab mar chuka h
//   Pr fir mujhe realise hua ki shayad me uss time jhuth bol rha tha
  
//   So I can't stop loving you 
//   Ye mujhse nhi ho payega ki me tumse pyaar na kru
  
//   Likhne ko to bohot kuch h mere paas but I think itna hi kaafi rhega
//   Tum bhi shayad bore ho rhi hogi
  
  
//   So I think you like it
  
//   And Wish you a Very Happy New Year  Meri Pyari dukkar`
];

const ShayariPage = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const currentPage = Number(page);
  const TOTAL_PAGES = ShayariData.length;

  
  const [displayedText, setDisplayedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);

      useEffect(() => {
           if (isNaN(currentPage) || currentPage < 1 || currentPage > TOTAL_PAGES) return;
         
           const text = ShayariData[currentPage - 1] ?? '';
           let index = 1;
         
           setDisplayedText('');
           setTypingDone(false);
         
           let interval;
           const timeout = setTimeout(() => {
             interval = setInterval(() => {
               setDisplayedText(text.slice(0, index));
               index++;
         
               if (index > text.length) {
                 clearInterval(interval);
                 setTypingDone(true);
               }
             }, 100);
           }, 500); 
         
           return () => {
             clearTimeout(timeout);
             clearInterval(interval);
           };
         }, [currentPage, TOTAL_PAGES]);


         
  if (isNaN(currentPage) || currentPage < 1 || currentPage > TOTAL_PAGES) {
    return <Navigate to="/shayari/1" replace />;
  }

  return (
  <div className="min-h-screen flex flex-col items-center 
                bg-linear-to-br from-purple-200 via-lavender-200 to-pink-200 px-4
                pt-10">

                  

     <div className="
                 relative
                 bg-linear-to-br from-pink-50 via-purple-50 to-rose-50
                 backdrop-blur-lg
                 rounded-3xl
                 shadow-2xl
                 border border-pink-200/40
                 px-10 py-16
                 w-full max-w-2xl
                 min-h-88
                 flex flex-col justify-start
                 overflow-hidden
                 hover:scale-105 transition-transform duration-500">
       <p className="text-xl md:text-2xl text-pink-800 italic leading-relaxed text-center whitespace-pre-line tracking-wide">
           {displayedText}
           {/* {!typingDone && <span className="animate-pulse text-pink-500">|</span>} */}
        </p>

          {typingDone && (
              <div className="mt-8 flex justify-center gap-4 animate-fade-in">
                  <span className="text-pink-400 text-3xl animate-bounce">♥</span>
                  <span className="text-pink-500 text-4xl animate-pulse">♥</span>
                  <span className="text-pink-400 text-3xl animate-bounce delay-200">♥</span>
              </div>
          )}

          <div className="absolute top-4 right-6 flex gap-2">
              <span className="text-pink-300 text-xl animate-bounce">❤</span>
              <span className="text-pink-200 text-lg animate-pulse">❤</span>
              </div>
            </div>

        
        
              <div className="mt-6 flex justify-center gap-8 transition-all duration-500">
              
                <button
                  onClick={() => navigate(`/shayari/${currentPage - 1}`)}
                  disabled={currentPage === 1}
                  className={`px-8 py-3 rounded-full border-2 transition-all duration-300
                    ${currentPage === 1
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed border-gray-300'
                      : 'bg-gray-400 hover:bg-gray-500 border-gray-300'}`}
                >
                  ← Previous
                </button>
              
                <button
                  onClick={() => navigate(`/shayari/${currentPage + 1}`)}
                  disabled={currentPage === TOTAL_PAGES}
                  className={`px-8 py-3 rounded-full border-2 text-white transition-all duration-300
                    ${currentPage === TOTAL_PAGES
                      ? 'bg-pink-400 cursor-not-allowed border-pink-400'
                      : 'bg-pink-500 hover:bg-pink-600 border-pink-400'}`}
                >
                  Next →
                </button>
              
              </div>
           </div>
);
}

export default ShayariPage;
