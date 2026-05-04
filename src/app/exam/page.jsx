"use client";
import { useState } from 'react';

export default function ExamPage() {
  const [examStarted, setExamStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    { id: 1, q: "العضو المسؤول عن استخلاص البولينا من الدم هو:", options: ["الرئة", "الكلية", "الجلد"], ans: "الكلية" },
    { id: 2, q: "مرض يتسبب في تدمير الشعيرات الدموية بالمثانة:", options: ["البلهارسيا", "الأنفلونزا", "السكر"], ans: "البلهارسيا" },
    { id: 3, q: "تقع الكليتان على جانبي:", options: ["القلب", "المعدة", "العمود الفقري"], ans: "العمود الفقري" },
    { id: 4, q: "أنبوبان رفيعان ينقلان البول من الكلية للمثانة:", options: ["الشرايين", "الحالبان", "الأوردة"], ans: "الحالبان" },
    { id: 5, q: "يتم فلترة الدم داخل الكلية بواسطة أنابيب دقيقة تسمى:", options: ["النفرونات", "الألياف", "المسام"], ans: "النفرونات" }
  ];

  const handleSelect = (questionId, selectedOption) => {
    if (showResult) return; 
    setUserAnswers({ ...userAnswers, [questionId]: selectedOption });
  };

  const calculateScore = () => {
    let currentScore = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.ans) currentScore++;
    });
    setScore(currentScore);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. كارت بداية الاختبار - لون لبني واضح وجذاب
  if (!examStarted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6" dir="rtl">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-cyan-200/50 border-4 border-cyan-100 overflow-hidden transform transition-all">
          {/* رأس الكارت بتدرج لبني قوي */}
          <div className="bg-linear-to-br from-cyan-400 to-blue-500 p-10 text-center">
            <div className="bg-white/90 w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-cyan-600">✍️</span>
            </div>
            <h1 className="text-3xl font-black mb-2 text-white shadow-sm">جاهز للاختبار؟</h1>
            <p className="text-cyan-50 font-medium italic opacity-90">مراجعة وحدة الإخراج في الإنسان</p>
          </div>
          
          <div className="p-10 bg-cyan-50/20">
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-cyan-900 bg-white p-4 rounded-2xl border-2 border-cyan-100 shadow-sm">
                <span className="bg-cyan-500 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">5</span>
                <span className="font-bold text-lg">أسئلة اختيار من متعدد</span>
              </div>
              <div className="flex items-center gap-4 text-cyan-900 bg-white p-4 rounded-2xl border-2 border-cyan-100 shadow-sm">
                <span className="bg-cyan-500 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">✓</span>
                <span className="font-bold text-lg">تصحيح فوري للنتائج</span>
              </div>
            </div>

            <button 
              onClick={() => setExamStarted(true)}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-black py-5 rounded-2xl text-xl shadow-xl shadow-cyan-300 transition-all active:scale-95 border-b-4 border-cyan-700"
            >
              ابدأ الاختبار الآن
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6" dir="rtl">
      {/* هيدر الصفحة بلون لبني صريح */}
      <header className="flex justify-between items-center mb-10 bg-cyan-500 p-6 rounded-3xl border-b-4 border-cyan-700 shadow-lg">
        <h1 className="text-xl font-black text-white italic tracking-wide">اختبار الجهاز البولي</h1>
        <div className="text-sm font-black text-cyan-700 bg-white px-5 py-2 rounded-2xl shadow-inner border-2 border-cyan-100">
           أجبت على: {Object.keys(userAnswers).length} / {questions.length}
        </div>
      </header>

      {showResult && (
        <div className="mb-10 p-12 bg-white border-4 border-cyan-500 rounded-[3.5rem] text-center shadow-2xl shadow-cyan-100 animate-in fade-in zoom-in duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl">🎓</div>
          <h2 className="text-2xl font-black mb-4 text-cyan-600">نتيجة فحص المعلومات</h2>
          <div className="text-8xl font-black mb-6 text-cyan-500 drop-shadow-md">{score} / {questions.length}</div>
          <p className="text-cyan-800 mb-10 font-black text-xl leading-relaxed">
            {score === questions.length ? "عبقري! لقد أتقنت وحدة الإخراج بجدارة 🏆" : "أداء رائع، راجع أخطاءك لتصبح أفضل 🌟"}
          </p>
          <button 
            onClick={() => { setShowResult(false); setUserAnswers({}); setScore(0); setExamStarted(false); }}
            className="bg-cyan-500 text-white px-14 py-4 rounded-2xl font-black hover:bg-cyan-600 transition-all shadow-lg border-b-4 border-cyan-700 active:translate-y-1"
          >
            إعادة التحدي
          </button>
        </div>
      )}

      <div className="space-y-8">
        {questions.map((item, idx) => (
          <div key={item.id} className="p-8 bg-white rounded-[2.5rem] border-2 border-cyan-100 shadow-md transition-all hover:shadow-cyan-100 hover:border-cyan-300 group">
            <p className="text-xl font-black mb-8 text-slate-800 leading-relaxed group-hover:text-cyan-700 transition-colors">
              <span className="bg-cyan-500 text-white w-10 h-10 inline-flex items-center justify-center rounded-2xl ml-4 text-lg rotate-3 shadow-md">{idx + 1}</span>
              {item.q}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {item.options.map(opt => {
                const isSelected = userAnswers[item.id] === opt;
                const isCorrect = showResult && opt === item.ans;
                const isWrong = showResult && isSelected && opt !== item.ans;

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelect(item.id, opt)}
                    disabled={showResult}
                    className={`p-5 text-center rounded-3xl border-2 transition-all font-black text-base
                      ${isSelected ? 'border-cyan-500 bg-cyan-50 text-cyan-700 shadow-md translate-y-[-2px]' : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-cyan-50 hover:border-cyan-200'}
                      ${isCorrect ? 'bg-emerald-500 border-emerald-700 text-white !important opacity-100 shadow-lg' : ''}
                      ${isWrong ? 'bg-rose-500 border-rose-700 text-white !important opacity-100 shadow-lg' : ''}
                      ${showResult && !isCorrect && !isSelected ? 'opacity-30 blur-[0.5px]' : ''}
                    `}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!showResult && (
        <button
          onClick={calculateScore}
          disabled={Object.keys(userAnswers).length < questions.length}
          className={`w-full py-6 rounded-4xl font-black text-2xl my-14 transition-all shadow-xl
            ${Object.keys(userAnswers).length < questions.length 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed border-b-4 border-slate-300' 
              : 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-cyan-200 hover:-translate-y-1 border-b-4 border-cyan-700 active:translate-y-1'}`}
        >
          {Object.keys(userAnswers).length < questions.length 
            ? `باقي ${questions.length - Object.keys(userAnswers).length} أسئلة` 
            : "تسليم الاختبار النهائي"}
        </button>
      )}
    </div>
  );
}