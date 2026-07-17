import Link from "next/link";
import { HiArrowRight, HiLocationMarker } from "react-icons/hi";
import { BiBed, BiBath, BiExpand } from "react-icons/bi";

const propertyData: Record<string, any> = {
  "villa-miami": {
    title: "فيلا أزور",
    location: "ميامي بيتش، فلوريدا",
    price: "12,500,000 $",
    beds: 6, baths: 7, area: "8,400 قدم²",
    hero: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1920&q=85",
    description:
      "تحفة معمارية تطل على المحيط الأطلسي. تتميز هذه الفيلا المطلة على الشاطئ بست غرف نوم ونوافذ من الأرض حتى السقف، ومسبح لا متناهٍ خاص، وحدائق مشذبة بعناية تمتد على مساحة فدان كامل.",
    features: [
      "وصول خاص للشاطئ",
      "مسبح لا متناهٍ مع إطلالة على المحيط",
      "أتمتة منزلية ذكية",
      "قبو نبيذ يسع 1,200 زجاجة",
      "سينما منزلية تتسع لـ 16 شخصاً",
      "رصيف خاص مع مرسى قوارب",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=85",
    ],
  },
  "penthouse-dubai": {
    title: "بنتهاوس سكاي",
    location: "دبي مارينا، الإمارات",
    price: "8,900,000 $",
    beds: 4, baths: 5, area: "5,200 قدم²",
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
    description:
      "يطل هذا البنتهاوس من ارتفاع 80 طابقاً فوق دبي مارينا على الخليج العربي وأفق المدينة. نوافذ من الأرض حتى السقف، وتراس خاص، وتشطيبات من أشهر المصممين العالميين.",
    features: [
      "إطلالة بانورامية على الخليج",
      "تراس خاص على السطح",
      "أرضيات رخام إيطالي",
      "جاكوزي لا متناهي",
      "مصعد خاص",
      "خدمة بتلر 24 ساعة",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    ],
  },
  "estate-beverly": {
    title: "قصر بيفرلي هيلز",
    location: "بيفرلي هيلز، كاليفورنيا",
    price: "22,000,000 $",
    beds: 8, baths: 10, area: "12,000 قدم²",
    hero: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85",
    description:
      "مجمع أسطوري في بيفرلي هيلز يوفر خصوصية وفخامة لا تُضاهى. يقع خلف بوابات خاصة على فدانين، ويضم مبنى رئيسياً وبيت ضيافة ومرافق على مستوى المنتجعات.",
    features: [
      "مدخل خاص ببوابة",
      "مسبح أولمبي",
      "ملعب تنس",
      "سبا ومركز صحي",
      "غرفة عرض أفلام",
      "جراج لـ 7 سيارات",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    ],
  },
  "villa-santorini": {
    title: "منتجع سانتوريني", location: "سانتوريني، اليونان",
    price: "4,800,000 $", beds: 5, baths: 4, area: "3,600 قدم²",
    hero: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=85",
    description:
      "منتجع سيكلادي مذهل منحوت في منحدرات كالديرا. كل غرفة تقدم إطلالات خلابة على غروب الشمس فوق بحر إيجة، مع مسابح خاصة وهندسة سيكلادية تقليدية.",
    features: [
      "إطلالة على كالديرا وغروب الشمس",
      "مسبح خاص",
      "جاكوزي خارجي",
      "هندسة معمارية تقليدية",
      "حديقة متوسطية",
      "غرف للخدم",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
    ],
  },
  "apartment-nyc": {
    title: "سنترال بارك سويت", location: "نيويورك، الولايات المتحدة",
    price: "6,200,000 $", beds: 3, baths: 3, area: "2,800 قدم²",
    hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85",
    description:
      "بنتهاوس نادر من حقبة ما قبل الحرب يطل على سنترال بارك. تم ترميمه بإتقان مع وسائل راحة عصرية مع الحفاظ على التفاصيل المعمارية الأصلية.",
    features: [
      "إطلالة على سنترال بارك",
      "تفاصيل أصلية من حقبة ما قبل الحرب",
      "مطبخ شيف",
      "تراس خاص",
      "قبو نبيذ",
      "مخطط طابق كامل",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85",
    ],
  },
  "villa-tuscany": {
    title: "فيلا توسكانا", location: "توسكانا، إيطاليا",
    price: "3,900,000 $", beds: 5, baths: 4, area: "4,800 قدم²",
    hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85",
    description:
      "فيلا من القرن الثامن عشر تم ترميمها وتحيط بها كروم العنب وبساتين الزيتون. هذا العقار التوسكاني الأصيل يقدم مزيجاً مثالياً من السحر التاريخي والفخامة العصرية.",
    features: [
      "كروم عنب وبستان زيتون",
      "كنيسة خاصة",
      "مسبح لا متناهي",
      "مطبخ ريفي حجري",
      "لوحات جدارية أصلية",
      "بيت ضيافة",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
    ],
  },
  "villa-cannes": {
    title: "كان ريفييرا إستيت", location: "كان، فرنسا",
    price: "15,800,000 $", beds: 7, baths: 8, area: "9,200 قدم²",
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85",
    description:
      "قصر بيل إيبوك رائع على الريفييرا الفرنسية مع إطلالات ساحرة على البحر الأبيض المتوسط، ووصول خاص للشاطئ، وحدائق فرنسية رسمية.",
    features: [
      "وصول خاص للشاطئ",
      "حدائق فرنسية رسمية",
      "مسبح لا متناهي مدفأ",
      "ملعب تنس",
      "مرسى قوارب",
      "شقة للخدم",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=85",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=85",
    ],
  },
  "penthouse-singapore": {
    title: "مارينا باي بنتهاوس", location: "سنغافورة",
    price: "10,200,000 $", beds: 4, baths: 5, area: "4,600 قدم²",
    hero: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=85",
    description:
      "بنتهاوس فائق الحداثة في قلب منطقة مارينا باي في سنغافورة. نوافذ من الأرض حتى السقف تؤطر إطلالات خلابة على أفق المدينة في هذا المنزل الذكي المصمم بدقة.",
    features: [
      "إطلالة على مارينا باي",
      "نظام منزل ذكي",
      "مسبح لا متناهي خاص",
      "تراس حديقة يابانية",
      "غرفة نبيذ",
      "دراسة خاصة",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    ],
  },
  "villa-mykonos": {
    title: "ميكونوس بلو", location: "ميكونوس، اليونان",
    price: "5,600,000 $", beds: 5, baths: 6, area: "4,200 قدم²",
    hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85",
    description:
      "فيلا سيكلادية خلابة تقع على تل مع إطلالة بانورامية على بحر إيجة. جدران بيضاء وقباب زرقاء وآفاق متوسطية لا نهاية لها.",
    features: [
      "بانوراما بحر إيجة",
      "مسبح لا متناهي",
      "تراس طعام خارجي",
      "وصول خاص للشاطئ",
      "بار غروب الشمس",
      "أجنحة للضيوف",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(propertyData).map((id) => ({ id }));
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = propertyData[id];

  if (!property) {
    return (
      <main className="bg-dark min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-light mb-4">العقار غير موجود</h1>
          <Link href="/properties" className="text-gold hover:underline">العودة للعقارات</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-dark min-h-screen">
      <div className="relative h-[50vh] md:h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${property.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
          <div className="absolute top-20 md:top-24 right-6 md:right-12 z-10">
          <Link
            href="/properties"
            className="flex items-center gap-2 text-light/60 hover:text-gold text-sm transition-colors"
          >
            <HiArrowRight size={16} />
            العودة للعقارات
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 -mt-20 relative z-10">
        <div className="glass p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="text-2xl md:text-4xl font-serif text-light mb-3">
                {property.title}
              </h1>
              <div className="flex items-center gap-1.5 text-light/50">
                <HiLocationMarker className="text-gold/60" size={16} />
                <span>{property.location}</span>
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-gold font-medium">{property.price}</p>
          </div>

          <div className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-white/5">
            <div className="flex items-center gap-2">
              <BiBed size={20} className="text-gold/60" />
              <span className="text-sm text-light/60">{property.beds} غرف نوم</span>
            </div>
            <div className="flex items-center gap-2">
              <BiBath size={20} className="text-gold/60" />
              <span className="text-sm text-light/60">{property.baths} حمامات</span>
            </div>
            <div className="flex items-center gap-2">
              <BiExpand size={20} className="text-gold/60" />
              <span className="text-sm text-light/60">{property.area}</span>
            </div>
          </div>

          <p className="text-light/50 leading-relaxed mb-10 max-w-3xl">
            {property.description}
          </p>

          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-gold/60 mb-6">
              المميزات والمرافق
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {property.features.map((f: string) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold/60 rounded-full" />
                  <span className="text-sm text-light/40">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-sm tracking-[0.2em] uppercase text-gold/60 mb-8">
            معرض الصور
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {property.gallery.map((img: string, i: number) => (
              <div key={i} className="overflow-hidden">
                <div
                  className="h-[300px] bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-sm tracking-[0.2em] uppercase text-gold/60 mb-8">
            جولة افتراضية
          </h3>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${property.gallery[0]})` }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-500">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-gold/60 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl text-gold">▶</span>
                </div>
                <p className="text-sm text-light/70">شاهد الجولة الافتراضية</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="glass p-8">
            <h3 className="text-sm tracking-[0.2em] uppercase text-gold/60 mb-6">
              الموقع
            </h3>
            <div className="h-[250px] bg-cover bg-center grayscale"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1569336415962-a4bd9f18cdb3?w=900&q=85)" }}
            />
            <div className="flex items-center gap-2 mt-4">
              <HiLocationMarker className="text-gold/60" size={16} />
              <span className="text-sm text-light/50">{property.location}</span>
            </div>
          </div>
          <div className="glass p-8">
            <h3 className="text-sm tracking-[0.2em] uppercase text-gold/60 mb-6">
              مخطط الطوابق
            </h3>
            <div className="flex items-center justify-center h-[250px] border border-white/5">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-gold/20 flex items-center justify-center">
                  <BiExpand size={28} className="text-gold/40" />
                </div>
                <p className="text-xs text-light/30">مخطط الطابق متوفر عند الطلب</p>
                <button className="mt-4 px-6 py-2 border border-gold/30 text-gold text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-500">
                  طلب المخطط
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 text-center">
              <div>
                <p className="text-lg font-serif text-gold">{property.beds}</p>
                <p className="text-[10px] text-light/30 uppercase">غرف نوم</p>
              </div>
              <div>
                <p className="text-lg font-serif text-gold">{property.baths}</p>
                <p className="text-[10px] text-light/30 uppercase">حمامات</p>
              </div>
              <div>
                <p className="text-lg font-serif text-gold">{property.area}</p>
                <p className="text-[10px] text-light/30 uppercase">المساحة</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 mb-24 text-center">
          <h3 className="text-xl md:text-2xl font-serif text-light mb-4">
            هل أنت مهتم بهذا العقار؟
          </h3>
          <p className="text-sm text-light/40 mb-8 max-w-md mx-auto">
            احجز جولة خاصة أو اطلب المزيد من المعلومات من فريق الكونسيرج المخصص لدينا.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gold text-dark text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-dark transition-colors duration-500">
              احجز جولة
            </button>
            <button className="px-8 py-4 border border-light/20 text-light/80 text-xs tracking-[0.25em] uppercase hover:bg-light/10 transition-all duration-500">
              طلب معلومات
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
