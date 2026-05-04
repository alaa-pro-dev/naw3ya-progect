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
        <h2 className="text-4xl font-extrabold mb-4 text-cyan-800">وحدات المنهج الدراسي</h2>
        <p className="text-slate-500 font-medium text-lg">منهج العلوم - وحدة الإخراج في الإنسان</p>
      </header>
      
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-2.5 bg-sky-400 rounded-full shadow-sm shadow-sky-100"></div>
            <h3 className="text-2xl font-black text-slate-800">الوحدة الأولى: الإخراج في الإنسان</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {unit1Lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-sky-50 hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-2 transition-all duration-500"
              >
                {/* صورة الدرس */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img 
                    src={lesson.image} 
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-sky-900/10 to-transparent"></div>
                  
                  <div className="absolute bottom-6 right-6 text-3xl bg-white/95 backdrop-blur-sm rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg border border-sky-50 group-hover:rotate-6 transition-transform">
                    {lesson.icon}
                  </div>
                </div>

                {/* محتوى الكارت */}
                <div className="p-8">
                  <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-sky-500 transition-colors leading-tight">
                    الدرس {lesson.id}: {lesson.title} 
                  </h4>
                  <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                    {lesson.description} 
                  </p>

                  {/* زر ابدأ الدرس - لبني فاتح هادئ جداً */}
                  <a 
                    href={lesson.path}
                    className="inline-flex items-center justify-center w-full py-4.5 bg-sky-50 text-sky-600 font-black rounded-2xl hover:bg-sky-500 hover:text-white transition-all duration-300 gap-3 border-2 border-sky-100 group/btn shadow-sm"
                  >
                    ابدأ الدرس الآن
                    <span className="text-2xl group-hover/btn:-translate-x-2 transition-transform">←</span>
                  </a>
                </div>

                <span className="absolute top-4 left-6 text-7xl font-black text-sky-500/5 z-10 select-none pointer-events-none italic">
                  0{lesson.id}
                </span>
              </div>
            ))}
          </div>

          {/* كرت الاختبار الشامل - لبني هادئ وواضح ومريح للعين */}
          <div className="mt-16 bg-sky-100 border-2 border-sky-200 rounded-[2.5rem] p-10 text-sky-900 flex flex-col md:flex-row items-center justify-between shadow-lg shadow-sky-100/20 relative overflow-hidden">
            {/* لمسة جمالية في الخلفية */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-200/30 rounded-full blur-3xl"></div>
            
            <div className="mb-8 md:mb-0 text-center md:text-right relative z-10">
              <div className="inline-block bg-sky-500 text-white px-4 py-1 rounded-full text-xs font-bold mb-3 shadow-sm">تحدي شامل</div>
              <h4 className="text-3xl font-black mb-2">مستعد للاختبار الشامل؟</h4>
              <p className="text-sky-700 text-lg font-medium">اختبر معلوماتك في دروس الوحدة الأولى بأسلوب تفاعلي</p>
            </div>
            
            <a 
              href="/exam" 
              className="bg-white text-sky-600 px-12 py-5 rounded-3xl font-black text-xl hover:bg-sky-600 hover:text-white transition-all shadow-md hover:shadow-sky-200 border-2 border-sky-200 relative z-10 flex items-center gap-3 active:scale-95"
            >
              🚀 دخول بنك الأسئلة 
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}