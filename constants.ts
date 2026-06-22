import { Scenario, ScenarioType, MarketingVideo, ComparisonLink } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'combined',
    type: ScenarioType.HYBRID,
    name: 'Shaheqah 23 (Combined Portfolio)',
    color: '#4A2C5A', // Royal Purple
    description: 'Comprehensive analysis for the 64-unit premium 2BR portfolio. Combining 41 Short-Term Rental (STR) and 23 Long-Term Rental (LTR) layouts. Optimized to capture premium corporate travel, high-margin daily tourism surges during peak season, and steady baseline cashflow during off-season in Riyadh.',
    
    financials: {
        worst: {
            revenue: 11639696, 
            mabaatShare: 11639696 * 0.30, 
            netIncome: 11639696 * 0.70, 
            roi: 13.6
        },
        base: {
            revenue: 12252312,
            mabaatShare: 12252312 * 0.30, 
            netIncome: 12252312 * 0.70, 
            roi: 14.3
        },
        best: {
            revenue: 12864928, 
            mabaatShare: 12864928 * 0.30, 
            netIncome: 12864928 * 0.70, 
            roi: 15.0
        }
    },

    propertyValue: 60000000, 
    
    unitCount: 64,
    unitLabel: 'Units',
    occupancyDurationLabel: 'Annual Hybrid Projection',
    
    unitMix: [
        { 
            name: '2 Bedroom (Short-Term Rental) - 41 Units', 
            count: 41, 
            avgPrice: 248100, // BLENDED: (26100*5 + 16800*7)
            priceRange: { min: 235695, avg: 248100, max: 260505 }, 
        },
        { 
            name: '2 Bedroom (Long-Term Rental) - 23 Units', 
            count: 23, 
            avgPrice: 90444, // BLENDED: (7537*12)
            priceRange: { min: 85922, avg: 90444, max: 94966 }, 
        }
    ],
  },
  {
    id: 'str',
    type: ScenarioType.SHORT_TERM,
    name: 'STR Portfolio Segment (41 Units)',
    color: '#D4AF37', // Gold
    description: 'Consolidated Short-Term Rental (STR) segment containing 41 premium 2BR units. Highly responsive to seasonal demand hikes, designed to leverage maximum daily/monthly yields during the 5 peak months of Riyadh Season while maintaining high occupancy during the remaining 7 off-peak months.',
    
    financials: {
        worst: {
            revenue: 9663495, 
            mabaatShare: 9663495 * 0.30,
            netIncome: 9663495 * 0.70, 
            roi: 17.6
        },
        base: {
            revenue: 10172100, 
            mabaatShare: 10172100 * 0.30,
            netIncome: 10172100 * 0.70, 
            roi: 18.5
        },
        best: {
            revenue: 10680705, 
            mabaatShare: 10680705 * 0.30,
            netIncome: 10680705 * 0.70, 
            roi: 19.4
        }
    },

    propertyValue: 38437500, 
    
    unitCount: 41,
    unitLabel: 'Units',
    occupancyDurationLabel: 'STR Sub-Portfolio',
    
    unitMix: [
        { 
            name: '2BR (STR) Layouts', 
            count: 41, 
            avgPrice: 248100,
            priceRange: { min: 235695, avg: 248100, max: 260505 },
        }
    ],
  },
  {
    id: 'ltr',
    type: ScenarioType.LONG_TERM,
    name: 'LTR Portfolio Segment (23 Units)',
    color: '#AA7C11', // Bronze
    description: 'Conservative Long-Term Rental (LTR) segment of 23 premium 2BR contracts. Secures robust monthly financial predictability, completely eliminating tenant turnover friction and leasing overheads while locking in steady yields throughout the entire year.',
    
    financials: {
        worst: {
            revenue: 1976201, 
            mabaatShare: 1976201 * 0.30,
            netIncome: 1976201 * 0.70, 
            roi: 6.4
        },
        base: {
            revenue: 2080212, 
            mabaatShare: 2080212 * 0.30,
            netIncome: 2080212 * 0.70, 
            roi: 6.75
        },
        best: {
            revenue: 2184223, 
            mabaatShare: 2184223 * 0.30,
            netIncome: 2184223 * 0.70, 
            roi: 7.1
        }
    },

    propertyValue: 21562500, 
    
    unitCount: 23,
    unitLabel: 'Units',
    occupancyDurationLabel: 'LTR Sub-Portfolio',
    
    unitMix: [
        { 
            name: '2BR (LTR) Layouts', 
            count: 23, 
            avgPrice: 90444,
            priceRange: { min: 85922, avg: 90444, max: 94966 },
        }
    ],
  }
];

export const MARKETING_VIDEOS: MarketingVideo[] = [
    {
        id: 'v1',
        title: 'Community Overview',
        thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
        videoUrl: '#',
    },
    {
        id: 'v2',
        title: 'Apartment Interior',
        thumbnailUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        videoUrl: '#',
    }
];

export const COMPARISON_LINKS: Record<string, ComparisonLink[]> = {
  combined: [
    {
        platform: 'Roshan Residences',
        type: '2 Bedroom Premium Furnished',
        title: '2 Bedroom Furnished in Al Reem',
        location: 'Al Reem',
        area: '125 sqm',
        price: 185000,
        url: '#',
        photosUrl: '#'
    },
    {
        platform: 'Hittin Shaheqah complexes',
        type: '2 Bedroom Fully Furnished + Terrace',
        title: '2 Bedroom Furnished + Terrace in Hittin',
        location: 'Al Hittin',
        area: '140 sqm',
        price: 210000,
        url: '#',
        photosUrl: '#'
    },
    {
        platform: 'Shaheqah 23 Compound',
        type: '2 Bedroom Premium Furnished',
        title: '2 Bedroom Premium in Hittin, Riyadh',
        location: 'Al Hittin',
        area: '145 sqm',
        price: 248100,
        url: '#',
        photosUrl: '#'
    }
  ],
  str: [
    {
        platform: 'Airbnb',
        type: '2 Bedroom Holiday Home',
        title: 'Luxury 2BR with Balcony',
        location: 'Hittin, Riyadh',
        area: '120 sqm',
        price: 26100,
        period: '/mo',
        url: '#'
    },
    {
        platform: 'Booking.com',
        type: 'Premium 2BR Serviced Apartment',
        title: 'Serviced 2BR Apartment in Al Arid',
        location: 'Al Arid',
        area: '130 sqm',
        price: 16800,
        period: '/mo',
        url: '#'
    }
  ],
  ltr: [
    {
        platform: 'Bayut',
        type: '2 Bedroom Furnished Residential',
        title: 'Premium 2BR Apartment in Hittin',
        location: 'Hittin',
        area: '130 sqm',
        price: 7537,
        period: '/mo',
        url: '#'
    }
  ]
};

export const MABAAT_SHARE_PERCENTAGE = 0.30; // Mathwaa Fee is 30%
export const BRANCHES: any[] = [];
