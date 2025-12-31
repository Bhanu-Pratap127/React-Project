import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const ShayariData = [
  `Teri aankho ke saamne ye shehar kon dekhega
   Tu dariya si h ye lahar kon dekhega,

   Tu khubsurat se bhi jyada khubsurat h
   Tujhe dekhne ke baad ye tajmahal kon dekhega.. :)`,
  
  
  `Safar wahi tak jaha tak tum ho
   Nazar wahi tak jaha tak tum ho,

   Hazaaro phool dekhe hain is gulshan me magar
   Khushboo wahi tak hai jaha tak tum ho.. :)`,


  `Tum jo chhu lo usme jivan bhare
   Phool khushbu ko teri ye kabse khade,

   Maasumiyat bhi karti hai rasq aap pr
   Aaina bhi hai dekho fidaa aap pr,

   Khubsrati to deti misale teri
   Hyaa dekh kese nazre utare teri,

   Khil uthe duaa jo tujhe maang lu
   Itni pyari hai sundar hai masoom tu,

   Chaand raate jage tere didar ko
   Taare aanhe bhare tere didar ko,

   koyle'n bhi to chahti hai sunna tujhe
   Khil uthe phool sare tu jb jb hase,

   Jaha'n nazrein kre vha'n barish pade,

   Titliya tere haatho ki kathputliyaa
   Mor nache bjaye tu jsab taliyaa,

   Kisi devi ki maano murat hai tu
   Khubsurati ki pehli surat hai tu.. :)`,


  `Teri aankhe jese mausam h
   Kudrat sa tera chehra h,

   Laakh dilo se ho krke ye dil tujhpe hi thehra h,

   Jb tu dekhkr mujhko dheere se muskura deti h
   Meri nazre teri nazron ko haule se smjha deti h,

   Smjh na pata h ye dil ye to andha or behra h,
   Teri aankhe jese mausam kudrat sa tera chehra h.. :) `,

   
  `Are vo chand bhi tumhare saamne sada lge
   72 hoorein fiki tumhara noor zyada lage,

   Aur mat pucha karo ki kesi lgti ho tum hame
   Meri jaan tum to esi lgti ho jese swayam Kanha ko Radha lge.. :)`,

   
  `Pehli baar jo tujhse ki thi vo baat yaad h,
   Teri yaad me guzari vo raat yaad h..
   
   Yaad h mujhe teri vo jheel si aankhe,
   Fool se bhi khubsurat tere vo haath yaad h..
   
   Yaad h mujhe vo tera baat karte karte so jana,
   Dur hote hue bhi ek dusre me kho jana..
   
   Yaad h mujhe aaj bhi vo sb tere nakhre,
   Mujhse baat na ho to tera khana na khana..
   
   Kaise kiya tha mene tujhse izhaar yaad h,
   Har pal kiya jo tera vo intezaar yaad h..
   
   Ha me tujhe bhul gya hu shayad, Magar
   Mujhe aaj bhi hamara vo pyaar yaad h.. :)`,


  `Log bachte h samandar se lekin
   Hum tumhari aankon me dubne ko tyaar h,

   kisko dekhne ki chahat kre
   Tukmo dekh liya h to,

   Tumhari zulfon ki gehrai h bohot or
   Hmko pasand nahi aata h kinara,

   Log kehte h chaand ka tukda ho tum
   Hum kehte h chaand bhi tukda h tumhara.. :)`,


  `Mana ke tere dil me koi or makii h
   Tu fir bhi mera dil h akiida h yakii h,

   Ye aaine tujhe teri khabar de na sakenge
   Aa dekh meri aankho se tu kitna hasee h.. :)`,


 `Mujhe khwahish h teri aankho me kajal lagane ki
  Mujhe khwahish h tere pairo pr payal sajane ki,

  Tere haatho me kangan pehnane ki
  Tere maathe pr bindi lgane ki
  Tujhe sara shringaar kra kr aaina dikhane ki,

  Khubsurat to tu beintehaa h
  Mujhe bss khwahish h teri khubsurati badhane ki,

  Mohobbat karta hu thodi purani
  Is Genz jamane khwahish h tujhe apna saathi bnane ki.. :)`,


 `Chaand sitare phool parinde
  Shaam sawera ek taraf,

  Saari duniya uska charba
  Uska chahra ek taraf,

  Vo lad kar so bhi jaye to uska maatha chumu me
  Usse mohobbat ek taraf h usse jhagda ek taraf.. :)`
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
       <p className="text-xl md:text-2xl text-pink-800 italic leading-relaxed text-left whitespace-pre-line tracking-wide">
           {displayedText}
           {!typingDone && <span className="animate-pulse text-pink-500">|</span>}
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
