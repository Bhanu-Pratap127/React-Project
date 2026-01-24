import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const ShayariData = [
  `Teri aankho ke saamne ye shehar kon dekhega
   Tu dariya si h ye lahar kon dekhega,

   Tu khubsurat se bhi jyada khubsurat h
   Tujhe dekhne ke baad ye tajmahal kon dekhega.. :)`,
  
  
  
  `Kar sake jo muquabala teri Saadgi ka
   Chaand me wo Husn-O-Jamaal kahan,
   
   Har phool ki qismat itni achi nahi
   Har phool ki qismat me tere baal kahan.. :)`,


  
  `Safar wahi tak jaha tak tum ho
   Nazar wahi tak jaha tak tum ho,

   Hazaaro phool dekhe hain is gulshan me magar
   Khushboo wahi tak hai jaha tak tum ho.. :)`,


  
  `Mere liye zindagi ka matlab tum ho
   Meri har hasrat ka matlab tum ho,
   
   Mujhe maloom nahi mohobbat ka matlab
   Mere liye mohobbat ka matlab tum ho,
   
   Khubsurati ka matlab hota hai chaand
   Mere liye chaand ka matlab tum ho,
   
   Mere liye nashe ka matlab hai teri aankhe
   Mere liye sharaab ka matlab tum ho.. :)`,




 `Tujhe yaad na karu to aur kya karu
  Teri baat na karu to aur kya karu,
  
  Kya karu ki mujhe mil jaye tu
  Ibadat karu ? Dua karu ? Kya karu ?,
  
  Kya karu ki bas tere saath jeena tha
  Ab tere bagair na maru to kya aur karu,
  
  Kya karu ki tu bhi kab sunta hai meri
  Tujhse shikayat na karu to aur kya karu,
  
  Kya karu ki tu bhi itna pyaara hai
  Tujhse mohobbat na karu to aur kya karu.. :)`, 


 
 `Agar tum baarish ho
  To me bheegna chahoon,
  
  Agar tum dhoop ho
  To me jalna chahoon,
  
  Agar tum samandar ho
  To me doobna chahoon,
  
  Agar tum zindagi ho
  To me jeena chahoon,
  
  Agar tum zehar ho
  To me peena chahoon,
  
  Agar tum maut ho
  To me marna chahoon.. :)`,



 `Tum wo chaand ho jispar koi daag nahi
  Tum itni khubsurat ho jiska koi hisab nahi,
  
  Tum wo nadi ho jo apni marzi se behti h
  Tum wo baag ho jisme titliya rehti h,
  
  Tum wo phool ho jo kabhi murjhata nahi
  Tum wo rang ho jo kabhi utarta nahi,
  
  Tum wo nadi h jisme chaand nahata h
  Tum wo ho jisse chaand bhi sharmata h,
  
  Tum wo suraj ho jo thandak pohnchata h
  Tum wo raasta h jo jannat tak jata h.. :)`,



 `Tujhe me sochta raha raat bhar
  Apni aankho ko nochta raat bhar,
  
  Me raat ko teri tasvir dekhta raha
  Teri tasvir mujhe dekhti rahi raat bhar,
  
  Tere milne ka mujhe nahi pata lekin
  Tujhe khuda se maangta raha raat bhar,
  
  Tu so gaya apni duniya me kho gaya
  Me tere liye jaagta raha raat bhar,
  
  Andhere me bhi roshan tha kamra mera
  Tere liye ye dil jalta raha raat bhar,
  
  Tujhe shayad pata na ho magar sach h
  Teri yaad se me baat karta raha raat bhar,
  
  Chahe to uss chaand se puch le
  Tujhe taaro me dhundta raha raat bhar,
  
  Saanso ki tarah tujhe bharta raha apne andar
  Aur meri saans mujhse juda rahi raat bhar.. :)`,

  
 

 `Teri aankho me dekhu to kahi kho jata hu
  Jee bhar kar tujhe dekh nahi pata,
  
  Tujhe na dekhu to rehta hu bechain
  Tu dikh jaye to paas aane se khud ko rok nahi pata,
  
  Me chahta hu padhna teri aankho ko
  Par unhe dekh ke me kuch soch nahi pata,
  
  Teri aankho me dekhu to kahi kho jata hu
  Jee bhhar kar tujhe kabhi dekh nahi pata.. :)`,



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
   Khil uthe phool sare tu jb jb hase
   Jaha'n nazrein kre vha'n barish pade,

   Titliya tere haatho ki kathputliyaa
   Mor nache bjaye tu jab taliyaa,

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


  
 `Log bashte h samandar se lekin
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



 `Chaand sitare phool parinde Shaam sawera ek taraf
  Saari duniya uska charba Uska chahra ek taraf,
  
  Vo lad kar so bhi jaye to Uska maatha chumu me
  Usse mohobbat ek taraf h Usse jhagda ek taraf,

  Jis shay par vo ungali rakh de Usko vo dilwani hai
  Uski khushiya sab se awwal Sasta mehnga ek taraf,

  Saari duniya jo bhi bole Sab kuch shor sharaba hai
  Sab ka kehna ek taraf hai Uska kehna ek taraf,

  Jakhmo par marham lagvao Lekin uske haathon se
  Chaara-Saaji ek taraf hai Uska chhuna ek taraf,

  Us ne saari duniya maangi Mene usko maanga hai
  Uske sapne ek taraf hai Mera sapna ek taraf.. :)`


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
