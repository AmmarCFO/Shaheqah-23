import React from 'react';
import { motion } from 'framer-motion';

interface DetailedAssumptionsProps {
  lang: 'en' | 'ar';
}

const TEXTS = {
  en: {
    title: 'Model Assumptions & Seasonal Rate Structure',
    subtitle: 'Comprehensive rate guide and segment breakdowns driving the annual feasibility model.',
    seasonTitle: 'Season Split (Months)',
    ratesTitle: 'Base Monthly Rates (SAR) / Normal Scenario',
    breakdownTitle: 'Detailed Revenue Breakdown by Unit Type & Scenario (100% Occ.)',
    peakSeason: 'Peak Season',
    offSeason: 'Off-Season',
    months: 'Months',
    pctYear: '% of Year',
    rateType: 'Rate Type',
    twoBR: 'Premium 2 Bedroom (2BR)',
    unitType: 'Segment / Unit Type',
    units: 'Units',
    peakMIndex: 'Peak Mo.',
    offMIndex: 'Off Mo.',
    baseRev: 'Base Revenue',
    pessimistic: 'Pessimistic (-5%)',
    base: 'Base (Normal)',
    optimistic: 'Optimistic (+5%)',
    grandTotal: 'GRAND TOTAL (Unique Inventory: 64 Units)',
    ltrOff: 'LTR Rate (Off-Season, 7 mo.)',
    ltrPeak: 'LTR Rate (Peak Season, 5 mo.)',
    strOff: 'STR Rate (Off-Season, 7 mo.)',
    strPeak: 'STR Rate (Peak Season, 5 mo.)',
    footnote: 'Calculations assume 30.4 days per month average; actual short-term rental pricing maps monthly contract overrides.'
  },
  ar: {
    title: 'افتراضات النموذج وهيكل الأسعار الموسمية',
    subtitle: 'دليل شامل للأسعار وتفاصيل الفئات المحركة لنموذج الجدوى السنوي للـ ٦٤ شقة.',
    seasonTitle: 'توزيع المواسم السنوية (بالأشهر)',
    ratesTitle: 'أسعار الإيجار الشهرية الأساسية (بالريال) / السيناريو الطبيعي',
    breakdownTitle: 'تفاصيل توزيع الإيرادات حسب نوع الوحدة والسيناريو (عند إشغال ١٠٠٪)',
    peakSeason: 'موسم الذروة (الذروة)',
    offSeason: 'الموسم العادي (خارج الذروة)',
    months: 'الأشهر',
    pctYear: 'نسبة من السنة',
    rateType: 'نوع خطة الأسعار',
    twoBR: 'شقة غرفتين وصالة فاخرة (2BR)',
    unitType: 'فئة / نوع الوحدة',
    units: 'الوحدات',
    peakMIndex: 'أشهر الذروة',
    offMIndex: 'الأشهر العادية',
    baseRev: 'الإيراد الأساسي',
    pessimistic: 'متحفظ (-٥٪)',
    base: 'أساسي (طبيعي)',
    optimistic: 'متفائل (+٥٪)',
    grandTotal: 'إجمالي المحفظة (العدد الفعلي: ٦٤ وحدة سكنية)',
    ltrOff: 'طويل الأجل (موسم عادي، ٧ أشهر)',
    ltrPeak: 'طويل الأجل (موسم ذروة، ٥ أشهر)',
    strOff: 'قصير الأجل (موسم عادي، ٧ أشهر)',
    strPeak: 'قصير الأجل (موسم ذروة، ٥ أشهر)',
    footnote: 'تفترض الحسابات متوسط ٣٠.٤ يومًا في الشهر؛ تسعير الإيجار قصير الأجل يتطابق مع شروط العقود الشهرية ببرنامج مَثوى.'
  }
};

const DETAILED_ROWS = [
  { segmentKey: '2br_str_peak', segmentEn: '2BR STR (Peak Season)', segmentAr: 'غرفتين وصالة قصير الأجل (موسم الذروة)', units: 41, peak: 5, off: 0, pessimistic: 5082975, base: 5350500, optimistic: 5618025 },
  { segmentKey: '2br_str_off', segmentEn: '2BR STR (Off Season)', segmentAr: 'غرفتين وصالة قصير الأجل (موسم عادي)', units: 41, peak: 0, off: 7, pessimistic: 4580520, base: 4821600, optimistic: 5062680 },
  { segmentKey: '2br_ltr_peak', segmentEn: '2BR LTR (Peak Season)', segmentAr: 'غرفتين وصالة طويل الأجل (موسم الذروة)', units: 23, peak: 5, off: 0, pessimistic: 823417, base: 866755, optimistic: 910093 },
  { segmentKey: '2br_ltr_off', segmentEn: '2BR LTR (Off Season)', segmentAr: 'غرفتين وصالة طويل الأجل (موسم عادي)', units: 23, peak: 0, off: 7, pessimistic: 1152784, base: 1213457, optimistic: 1274130 }
];

const DetailedAssumptions: React.FC<DetailedAssumptionsProps> = ({ lang }) => {
  const isRTL = lang === 'ar';
  const t = TEXTS[lang];
  const locale = isRTL ? 'ar-SA' : 'en-US';

  return (
    <div className={`mt-12 sm:mt-16 w-full max-w-6xl mx-auto space-y-12 ${isRTL ? 'font-cairo text-right' : 'font-sans text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Title */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
          {t.title}
        </h3>
        <p className="text-xs sm:text-base text-gray-500 font-medium">
          {t.subtitle}
        </p>
      </div>

      {/* Grid of Season split & Rates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Season Split Card */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
              {t.seasonTitle}
            </h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-purple-50/50 p-3.5 rounded-xl border border-purple-100/50">
                <div>
                  <span className="block font-bold text-gray-900 text-sm sm:text-base">{t.peakSeason}</span>
                  <span className="text-xs text-gray-500">{isRTL ? 'نوفمبر إلى مارس (موسم الرياض)' : 'November to March (Riyadh Season)'}</span>
                </div>
                <div className="text-right">
                  <span className="block font-black text-purple-900 text-lg sm:text-xl">5 {t.months}</span>
                  <span className="text-xs font-semibold text-purple-600">41.7%</span>
                </div>
              </div>

              <div className="flex justify-between items-center bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <div>
                  <span className="block font-bold text-gray-900 text-sm sm:text-base">{t.offSeason}</span>
                  <span className="text-xs text-gray-500">{isRTL ? 'أبريل إلى أكتوبر' : 'April to October'}</span>
                </div>
                <div className="text-right">
                  <span className="block font-black text-gray-900 text-lg sm:text-xl">7 {t.months}</span>
                  <span className="text-xs font-semibold text-gray-500">58.3%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-wider">
            <span>{isRTL ? 'إجمالي الدورة السنوية' : 'Total annual cycle'}</span>
            <span className="text-purple-600 font-extrabold">12 {isRTL ? 'أشهر' : 'Months'} (100.0%)</span>
          </div>
        </div>

        {/* Base Rates Card */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
          <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            {t.ratesTitle}
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 font-bold">
                  <th className="py-2.5 text-left rtl:text-right font-bold text-xs uppercase tracking-wider">{t.rateType}</th>
                  <th className="py-2.5 text-center font-bold text-xs uppercase tracking-wider text-teal-600">{t.twoBR}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 font-semibold text-gray-700">{t.ltrOff}</td>
                  <td className="py-3 text-center font-bold text-gray-900 tabular-nums">7,537 <span className="text-[10px] text-gray-400 font-normal">/mo</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 font-semibold text-gray-700">{t.ltrPeak}</td>
                  <td className="py-3 text-center font-bold text-gray-900 tabular-nums">7,537 <span className="text-[10px] text-gray-400 font-normal">/mo</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 font-semibold text-gray-700">{t.strOff}</td>
                  <td className="py-3 text-center font-bold text-gray-900 tabular-nums">16,800 <span className="text-[10px] text-gray-400 font-normal">/mo</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 font-semibold text-gray-700">{t.strPeak}</td>
                  <td className="py-3 text-center font-bold text-gray-900 tabular-nums">26,100 <span className="text-[10px] text-gray-400 font-normal">/mo</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-4 leading-relaxed italic">{t.footnote}</p>
        </div>

      </div>

      {/* Detailed Revenue Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm overflow-hidden">
        <h4 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          {t.breakdownTitle}
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-gray-600 text-center">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 font-bold bg-gray-50/50">
                <th className="py-3 px-4 text-left rtl:text-right font-black">{t.unitType}</th>
                <th className="py-3 px-2 font-bold">{t.units}</th>
                <th className="py-3 px-2 font-bold">{t.peakMIndex}</th>
                <th className="py-3 px-2 font-bold">{t.offMIndex}</th>
                <th className="py-3 px-4 font-bold text-right rtl:text-left text-gray-400">{t.pessimistic}</th>
                <th className="py-3 px-4 font-extrabold text-right rtl:text-left text-purple-900 bg-purple-50/50">{t.base}</th>
                <th className="py-3 px-4 font-bold text-right rtl:text-left text-[#10B981]">{t.optimistic}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {DETAILED_ROWS.map((row) => (
                <tr key={row.segmentKey} className="hover:bg-gray-50/30 transition-colors">
                  <td className="py-3 px-4 text-left rtl:text-right font-bold text-gray-900">
                    {isRTL ? row.segmentAr : row.segmentEn}
                  </td>
                  <td className="py-3 px-2 font-semibold tabular-nums text-gray-700">{row.units}</td>
                  <td className="py-3 px-2 font-medium text-purple-600 tabular-nums">{row.peak}</td>
                  <td className="py-3 px-2 font-medium text-gray-600 tabular-nums">{row.off}</td>
                  <td className="py-3 px-4 font-semibold text-right rtl:text-left tabular-nums text-gray-500">
                    {row.pessimistic.toLocaleString(locale)}
                  </td>
                  <td className="py-3 px-4 font-black text-right rtl:text-left tabular-nums text-purple-950 bg-purple-50/20">
                    {row.base.toLocaleString(locale)}
                  </td>
                  <td className="py-3 px-4 font-semibold text-right rtl:text-left tabular-nums text-[#10B981]">
                    {row.optimistic.toLocaleString(locale)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-900 bg-gray-900 text-white font-bold text-xs sm:text-sm">
                <td className="py-4 px-4 text-left rtl:text-right font-black rounded-l-2xl rtl:rounded-r-2xl rtl:rounded-l-none">
                  {t.grandTotal}
                </td>
                <td className="py-4 px-2 font-black tabular-nums">64</td>
                <td className="py-4 px-2 font-bold text-purple-300 tabular-nums">5</td>
                <td className="py-4 px-2 font-bold text-gray-300 tabular-nums">7</td>
                <td className="py-4 px-4 text-right rtl:text-left font-black tabular-nums text-gray-200">
                  11,639,696
                </td>
                <td className="py-4 px-4 text-right rtl:text-left font-extrabold tabular-nums text-purple-100 bg-purple-950">
                  12,252,312
                </td>
                <td className="py-4 px-4 text-right rtl:text-left font-black tabular-nums text-emerald-300 rounded-r-2xl rtl:rounded-l-2xl rtl:rounded-r-none">
                  12,864,928
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

    </div>
  );
};

export default DetailedAssumptions;
