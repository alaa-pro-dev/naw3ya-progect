export default function UnitsPage() {
  const unit1Lessons = [
    { 
      id: 1, 
      title: "البنية التشريحية وأعضاء التصفية", 
      description: "استكشاف مفهوم الإخراج، أنواع الفضلات، والتركيب التشريحي الدقيق للجهاز البولي.",
      path: "/unit1/lesson1",
      icon: "🧬",
      image: "/images/1.jpg"
    },
    { 
      id: 2, 
      title: "فسيولوجيا التشريح وطرق الحماية", 
      description: "شرح آلية عمل الكلية، الكيمياء الحيوية للبول، وأسس دستور الصحة الكلوية.",
      path: "/unit1/lesson2",
      icon: "🧪",
      image: "/images/2.jpg"
    },
  ];

  return (
    <main className="container mx-auto p-8 max-w-6xl" dir="rtl">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 text-sky-900">وحدات المنهج الدراسي</h2>
        <p className="text-slate-500 font-medium text-lg">منهج العلوم - وحدة الإخراج في الإنسان</p>
      </header>
      
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-2.5 bg-sky-600 rounded-full shadow-sm"></div>
            <h3 className="text-2xl font-black text-slate-800">الوحدة الأولى: الإخراج في الإنسان</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {unit1Lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-sky-100 hover:shadow-2xl hover:shadow-sky-200/40 hover:-translate-y-2 transition-all duration-500"
              >
                {/* صورة الدرس */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img 
                    src={lesson.image} 
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-sky-900/20 to-transparent"></div>
                  
                  <div className="absolute bottom-6 right-6 text-3xl bg-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg border border-sky-100 group-hover:rotate-6 transition-transform">
                    {lesson.icon}
                  </div>
                </div>

                {/* محتوى الكارت */}
                <div className="p-8">
                  <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors leading-tight">
                    الدرس {lesson.id}: {lesson.title} 
                  </h4>
                  <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                    {lesson.description} 
                  </p>

                  {/* زر ابدأ الدرس - لبني غامق قبل الضغط ويتحول للون أغمق عند التمرير */}
                  <a 
                    href={lesson.path}
                    className="inline-flex items-center justify-center w-full py-4.5 bg-sky-600 text-white font-black rounded-2xl hover:bg-sky-800 transition-all duration-300 gap-3 border-b-4 border-sky-800 shadow-lg active:border-b-0 active:translate-y-1 group/btn"
                  >
                    ابدأ الدرس الآن
                    <span className="text-2xl group-hover/btn:-translate-x-2 transition-transform">←</span>
                  </a>
                </div>

                <span className="absolute top-4 left-6 text-7xl font-black text-sky-600/5 z-10 select-none pointer-events-none italic">
                  0{lesson.id}
                </span>
              </div>
            ))}
          </div>

          {/* كرت الاختبار الشامل - لبني غامق ظاهر ومتزن */}
          <div className="mt-16 bg-sky-700 border-b-8 border-sky-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
            {/* لمسات جمالية في الخلفية */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl group-hover:bg-sky-400/30 transition-colors"></div>
            
            <div className="mb-8 md:mb-0 text-center md:text-right relative z-10">
              <div className="inline-block bg-white text-sky-700 px-5 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm">تحدي المراجعة النهائية</div>
              <h4 className="text-4xl font-black mb-3">مستعد للاختبار الشامل؟</h4>
              <p className="text-sky-100 text-lg font-medium opacity-90">قيم استيعابك الكامل لوحدة الإخراج وحطم الأرقام القياسية</p>
            </div>
            
            <a 
              href="/exam" 
              className="bg-white text-sky-800 px-14 py-5 rounded-[1.8rem] font-black text-2xl hover:bg-sky-50 transition-all shadow-xl hover:scale-105 active:scale-95 relative z-10 flex items-center gap-3 border-b-4 border-slate-200"
            >
              🚀 ابدأ التحدي 
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}