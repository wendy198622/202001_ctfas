new WOW().init();

const messages = {
  cn: {
    text:'简体中文',
    title:'共同打造<br>美好的未来愿景',
    title_mob:'共同打造<br>美好的未来愿景',
    gotopage: {
      WHO_WE_ARE: '我们是谁',
      PHILOSOPHY: '中心思想',
      WHAT_WE_DO: '我们所做的事',
      RELATED_ENTERPRISE: '关系企业',
      CALENDAR: '时间表',
      CONTACT: '联络方式'
    },
    page1: {
      WHO_WE_ARE: '我们是谁',
      content_p1: '磐石国际地产开发控股集团成立于2014年柬埔寨，过去曾在台湾台北市大安区、信义计划区从事房地产投资长达30年之久、专门发展商业地产房产，带着长年丰富的房地产经验、将舞台转战至柬埔寨首都金边。',
      content_p2: '为下一个新兴世界、19亿东盟人口的趋势、而大笔挥下30年企业发展的规划与策略，且以永续经营的理念、未来将跨及各行各业，以房地产起家，跨足教育、医疗、餐饮、银行、保险、娱乐、饭店、物流... 等多项具东盟潜力发展动向。'
    },
    page2: {
      PHILOSOPHY: '中心思想',
      content_p1: '磐石国际地产开发控股集团致力将一流的人才、高质量的技术、远见的目标、智能的生活规划引进柬埔寨，帮助当地发展、教育人民及回馈大众社会。 柬埔寨为东盟同盟国之一，晋东南亚核心，一带一路贸易枢纽，未来公司规划30年美好的发展前景及开发策略，为每一位投资人做最精准的把关。'
    },
    page3: {
      WHAT_WE_DO: '我们所做的事',
      title: '磐石国际地产开发控股集团',
      content_p1: '依照现阶段整个柬埔寨发展需求，在居住、医疗、教育、饮食、金融、观光及建设... 等，多元项目上并进发展，相辅相成。',
      list_1: '房产',
      list_2: '地产',
      list_3: '餐饮',
      list_4: '银行',
      list_5: '医院',
      list_6: '学校',
      list_7: '建材',
      list_8: '饭店'
    },
    page4: {
      RELATED_ENTERPRISE: '关系企业'
    },
    page5: {
      CALENDAR: '时间表',
      y2014_title: '新兴都市开发',
      y2014_year: '2014',
      y2014_content: '不假他人之手，为柬埔寨首都金边未来10年的都市延伸、早一步开始预备，并以具有前瞻的愿景思维、将新兴都市规划在金边新国际机场旁，具有东南亚一带一路的绝佳战略地位',
      y2017_title: '帝国首玺',
      y2017_year: '2017-2020年',
      y2017_content: '帝国系列的第一个代表作，采用国际标准施工品质、消防系统，一切建材均通过SGS 合格认证，为金边市第一栋巴洛克式24小时酒店高端物业大厦，并座落在金边核心大使馆特区BKK1，面对BKK1 森林高中、且邻近为来金边市地铁',
      y2019_title: '科技森林城市',
      y2019_year: '2020-2029',
      y2019_content: '现代科技森林城市、座落为金边市新兴都市ING 卫星城，政府机关、国际学校、 百货公司、豪宅别墅、商业大厦，及各大国际知名品牌争相落脚的城市，此区域拥有柬埔寨最宽敞、排水系统最完善的60 米洪森主干大道，并直通新金边国际机场，为金边市下个10 年主力发展的重点都市。 CTFAS 集团未来 3 年将在此区域率先规划「现代科技森林城市」，为准备迎接下个划时代的到来',
      y2020_title: '帝国天玺',
      y2020_year: '2020-2023年中',
      y2020_content: '为帝国系列双塔大楼的第二栋大厦，采用相同高品质标准，空中VIP 私人会所、锁定柬埔寨政商名流、外国使节高端客群，52楼的360度空中花园SKYBAR 将著名的柬埔寨湄公河、洞里萨河尽收眼底',
      y20201_title: '办公楼',
      y20201_year: '2020-2023年中',
      y20201_content: '此案为帝国系列的办公大楼群、一样将位置设立在大使馆区BKK1，为满足外国商务人士的便利需求，未来推出共享办公室及银行业务需求的商务空间，且兼具民生用品的百货便利商城，将一举解决金边市都市壅挤的交通烦恼'
    },
    page6: {
      CONTACT: '联络方式',
      content_p1: '如您有关于业务内容之疑问、咨询等相关讯息，请与我们联系。',
      form_style: '喜欢的风格',
      form_styleA: '西式现代化',
      form_styleB: '法式奢华风',
      form_styleC: '日式简约风',
      form_age: '年龄',
      form_ageA: '25岁以下',
      form_ageB: '25岁～50岁',
      form_ageC: '50岁以上',
      form_reason: '购屋用途',
      form_reason_investment: '投资',
      form_reason_live: '自住',
      form_foreign: '有无海外置产经验',
      form_foreign_yes: '有',
      form_foreign_no: '无',
      form_country: '国籍',
      form_area: '地区',
      form_checkbox: '我同意以上资料作为联系',
      form_address: '地址',
      form_name: '姓名',
      form_tel: '电话',
      form_message: '内容',
      form_email: 'E-MAIL',
      form_checkbtn: '送出'
    }
  },
  kh: {
    text:'Khmer',
    title:'គោលដៅចក្ខុវិស័យកំពុងតែអភិវឌ្ឍន៍អនាគតដ៏ល្អមួយ',
    title_mob:'គោលដៅចក្ខុវិស័យកំពុងតែអភិវឌ្ឍន៍អនាគតដ៏ល្អមួយ',
    gotopage: {
      WHO_WE_ARE: 'តើយើងជាអ្នកណា',
      PHILOSOPHY: 'ទស្សនវិជ្ជា',
      WHAT_WE_DO: 'អ្វីដែលយើងត្រូវធ្វើ',
      RELATED_ENTERPRISE: 'សហគ្រាសដែលពាក់ព័ន្ឋ',
      CALENDAR: 'ប្រតិទិន',
      CONTACT: 'ទំនាក់ទំនង'
    },
    page1: {
      WHO_WE_ARE: 'តើយើងជាអ្នកណា',
      content_p1: 'ក្រុមហ៊ុនអភិវឌ្ឍន៍អចលនទ្រព្យអន្តរជាតិផានសឺគ្រុបត្រូវបានបង្កើតឡើងនៅក្នុង ប្រទេសកម្ពុជាក្នុងឆ្នាំ ២០១៤។ កាលពីមុន ក្រុមហ៊ុននេះបានចូលរួមក្នុងការវិនិយោគអចលនទ្រព្យនៅស្រុកតាអាននិងស្រុក ស៊ីនអ៊ីនៃក្រុងតៃប៉ិប្រទេសតៃវ៉ាន់អស់រយៈពេល ៣០ ឆ្នាំដោយមានជំនាញក្នុងការអភិវឌ្ឍអចលនទ្រព្យពាណិជ្ជកម្ម។ ដំណាក់កាលនេះបានទៅដល់ភ្នំពេញដែលជារាជធានីនៃប្រទេសកម្ពុជា។',
      content_p2: 'សម្រាប់ពិភពលោកដែលកំពុងរីកចម្រើនបន្ទាប់ និន្នាការនៃប្រជាជនអាស៊ាន ១,៩ ពាន់លាននាក់ ផែនការនិងយុទ្ធសាស្ត្ររយៈពេល ៣០ ឆ្នាំសម្រាប់ការអភិវឌ្ឍសាជីវកម្មជាមួយនឹងគំនិតនៃការគ្រប់គ្រងប្រកបដោយចីរ ភាពអនាគតនឹងលាតសន្ធឹងលើគ្រប់ស្រទាប់វណ្ណៈដោយចាប់ផ្តើមពីវិស័យអចល នទ្រព្យឈានទៅរកការអប់រំ , វេជ្ជសាស្ត្រ, ម្ហូបអាហារ, ធនាគារ, ធានារ៉ាប់រង, ការកំសាន្ត, ភោជនីយដ្ឋាន,  ភ័ស្តុភារនិងការអភិវឌ្ឍជាច្រើនទៀតជាមួយនឹងសក្តានុពលអាស៊ាន។'
    },
    page2: {
      PHILOSOPHY: 'ទស្សនវិជ្ជា',
      content_p1: 'ក្រុមហ៊ុនអភិវឌ្ឍន៍អចលនទ្រព្យអន្តរជាតិផានសឺគ្រុបប្តេជ្ញាថានឹងនាំមកនូវទេពកោសល្យកំ រឹតទីមួយនិងបច្ចេកវិទ្យាដែលមានគុណភាពខ្ពស់ គោលដៅចក្ខុវិស័យនិងផែនការជីវិតប្រកបដោយភាពវៃឆ្លាតមកកាន់ប្រទេសកម្ពុជាដើម្បីជួ យដល់ការអភិវឌ្ឍមូលដ្ឋានអប់រំប្រជាជននិងផ្តល់ដល់សង្គមមនុស្សទូទៅ។ ប្រទេសកម្ពុជាគឺជាសម្ព័ន្ធមិត្តអាស៊ានមួយដែលជាស្នូលនៃអាស៊ីអាគ្នេយ៍និងជាមជ្ឈមណ្ឌ លពាណិជ្ជកម្មផ្លូវមួយខ្សែក្រវាត់មួយ ​​។នាពេលអនាគតក្រុមហ៊ុនគ្រោងនឹងមានទស្សនវិស័យអភិវឌ្ឍន៍ធនធានរ៉ែនិងយុទ្ធសា ស្ត្រអភិវឌ្ឍន៍ដ៏ស្រស់ស្អាតក្នុងរយៈពេល ៣០ ឆ្នាំដើម្បីធ្វើការត្រួតពិនិត្យឱ្យបានត្រឹមត្រូវបំផុតសម្រាប់វិនិយោគិនគ្រប់រូប។'
    },
    page3: {
      WHAT_WE_DO: 'អ្វីដែលយើងត្រូវធ្វើ',
      title: 'ក្រុមហ៊ុនអភិវឌ្ឍន៍អចលនទ្រព្យអន្តរជាតិផានសឺគ្រុប',
      content_p1: 'យោងតាមតំរូវការអភិវឌ្ឍន៍របស់ប្រទេសកម្ពុជា នៅដំណាក់កាលនេះគំរោងផ្សេងៗដូចជាគេហដ្ឋាន ការថែទាំសុខភាព ការអប់រំ ការផ្តល់ម្ហូបអាហារ ហិរញ្ញវត្ថុ ទេសចរណ៍និងសំណង់ជាដើមត្រូវបានបង្កើតឡើងស្របគ្នានិងបំពេញគ្នាទៅវិញ ទៅមក។',
      list_1: 'អចលនទ្រព្យ (ផ្ទះ)',
      list_2: 'អចលនទ្រព្យ ( ដីធ្លី)',
      list_3: 'ម្ហូបអាហារ',
      list_4: 'ធនាគារ',
      list_5: 'មន្ទីរពេទ្យ',
      list_6: 'សាលារៀន',
      list_7: 'គ្រឿងសង្ហារឹម',
      list_8: 'សណ្ឋាគារ'
    },
    page4: {
      RELATED_ENTERPRISE: 'សហគ្រាសដែលពាក់ព័ន្ឋ'
    },
    page5: {
      CALENDAR: 'ប្រតិទិន',
      y2014_title: 'ការអភិវឌ្ឍទីក្រុងថ្មី',
      y2014_year: '២០១៤',
      y2014_content: 'ចាប់ផ្តើមពីឆ្នាំ ២០១៤ CTFASផានសឺគ្រុបបានចូលឆ្នាំដំបូងនៃប្រទេសកម្ពុជាក្នុងឆ្នាំ ២០១៤ ហើយបានចាប់ផ្តើមរៀបចំគម្រោងអភិវឌ្ឍន៍ទីក្រុងថ្មីចាប់ពីការទទួលបានដីផែនការអភិវឌ្ឍ សំណង់ហេដ្ឋារចនាសម្ព័ន្ធរហូតដល់ផែនការទីក្រុងលម្អិតដំណើរការទាំងមូលត្រូវបានគ្រោ ងទុកដោយប្រុងប្រយ័ត្ន។ អ្នកដទៃទៀតរៀបចំពង្រីកទីប្រជុំជនរាជធានីភ្នំពេញនៃប្រទេសកម្ពុជាក្នុងរយៈពេល ១០ ឆ្នាំខាងមុខនិងរៀបចំឱ្យបានឆាប់ជាមួយនឹងចក្ខុវិស័យឆ្ពោះទៅមុខទីក្រុងដែលកំពុងរីកច ម្រើនត្រូវបានគេគ្រោងនឹងនៅជាប់អាកាសយានដ្ឋានអន្តរជាតិថ្មីនៃរាជធានីភ្នំពេញដែលមា នទីតាំងយុទ្ធសាស្ត្រល្អប្រសើរនៅតំបន់អាស៊ីអាគ្នេយ៍ខ្សែក្រវាត់មួយផ្លូវមួយ។',
      y2017_title: 'អ៊ីមភើរៀក្រោនឆ្នាំ',
      y2017_year: '២០១៧-២០២០',
      y2017_content: 'ស្នាដៃដំបូងនៃអ៊ីមភើរៀក្រោនបន្ទាប់ វាបានប្រកាន់ខ្ជាប់នូវគុណភាពសំណង់ស្តង់ដារអន្តរជាតិនិងប្រព័ន្ធការពារអគ្គីភ័ យសម្ភារៈសំណង់ទាំងអស់ដែលបានឆ្លងកាត់វិញ្ញាបនប័ត្រ SGS ។វាជាអគារអចលនទ្រព្យលំដាប់ខ្ពស់លំដាប់ខ្ពស់បំផុត ២៤ ម៉ោងនៅទីក្រុងភ្នំពេញហើយមានទីតាំងស្ថិតនៅក្នុងតំបន់ស្នូលស្ថានទូតភ្នំពេញ បឹងកេងកង ១ ដែលប្រឈមមុខនឹងវិទ្យាល័យបឹងកេងកង ១ និងជាប់នឹងរាជធានីភ្នំពេញ។',
      y2019_title: 'ទីក្រុងព្រៃបច្ចេកវិទ្យា',
      y2019_year: 'ទីក្រុងព្រៃបច្ចេកវិទ្យាឆ្នាំ២០២០-២០២៩',
      y2019_content: 'ទីក្រុងព្រៃបច្ចេកវិទ្យាទំនើបដែលមានទីតាំងស្ថិតនៅក្នុងទីក្រុងរណបអាយអិនជី ដែលជាទីក្រុងកំពុងរីកចម្រើនរបស់រាជធានីភ្នំពេញ ភ្នាក់ងាររដ្ឋាភិបាល សាលាអន្តរជាតិ ហាងទំនិញ វីឡាប្រណីត អគារពាណិជ្ជកម្មនិងទីក្រុងល្បី ៗ អន្តរជាតិធំ ៗ នៅតំបន់នេះ មានប្រព័ន្ធលូបង្ហូរទឹកពេញលេញបំផុតនៅលើផ្លូវហុនសែនផ្លូវ ៦០　ម៉ែត្រនិងមានទំនាក់ទំនងផ្ទាល់ជាមួយអាកាសយានដ្ឋានអន្តរជាតិភ្នំពេញថ្មី។វាគឺ ជាគន្លឹះនៃការអភិវឌ្ឍន៍ទីក្រុងភ្នំពេញនៅ១០ឆ្នាំបន្ទាប់​។សវាគឺជាគន្លឹះនៃការអភិ　វឌ្ឍន៍ទីក្រុងភ្នំពេញនៅ១០ឆ្នាំបន្ទាប់​។ស៊ីធីអេហ្វអេអេសគ្រុបនឹងដឹកនាំក្នុងការ ធ្វើផែនការ &quot;ទីក្រុងព្រៃ​​វិទ្យាសាស្ត្រនិងបច្ចេកវិទ្យា&quot;　នៅក្នុងតំបន់នេះក្នុងរយៈពេល ៣　ឆ្នាំខាងមុខក្នុងការរៀបចំសម្រាប់ការមកដល់នៃសម័យកាលបន្ទាប់។',
      y2020_title: 'អ៊ីមភើរៀក្រោន២',
      y2020_year: 'អ៊ីមភើរៀក្រោន២-ក្នុងឆ្នាំ២០២០ដល់២០២៣',
      y2020_content: 'គឺជាអគារទី ២ នៃអាណាចក្របន្ទាប់ នៃប៉មភ្លោះនៅពាក់កណ្តាលឆ្នាំ ២០២៣។ វាប្រកាន់ខ្ជាប់នូវស្តង់ដារដែលមានគុណភាពខ្ពស់ដូចគ្នាក្លឹប VIP ឯកជននៅលើមេឃ ដែលជាប់ភាពល្បីល្បាញ ។ ក្រុមអ្នកការទូតបរទេសដែលមានឋានៈខ្ពង់ខ្ពស់ ឧទ្យានមេឃ ៣៦០ ដឺក្រេស្កាយបារនៅជាន់ទី ៥២ មានទេសភាពបែបទេសភាពនៃផ្ទាំងគំនូរតាមដងទន្លេមេគង្គនិងទន្លេសាបដ៏ល្បី ល្បាញ។',
      y20201_title: 'អាគារការិយាល័យ',
      y20201_year: 'អ៊ីមភើរៀក្រោន២ ក្នុងឆ្នាំ២០២០ដល់២០២៣',
      y20201_content: 'គឺជាអគារទី ២ នៃអាណាចក្របន្ទាប់ នៃប៉មភ្លោះនៅពាក់កណ្តាលឆ្នាំ ២០២៣។ វាប្រកាន់ខ្ជាប់នូវស្តង់ដារដែលមានគុណភាពខ្ពស់ដូចគ្នាក្លឹប VIP ឯកជននៅលើមេឃ ដែលជាប់ភាពល្បីល្បាញ ។ ក្រុមអ្នកការទូតបរទេសដែលមានឋានៈខ្ពង់ខ្ពស់ ឧទ្យានមេឃ ៣៦០ ដឺក្រេស្កាយបារនៅជាន់ទី ៥២ មានទេសភាពបែបទេសភាពនៃផ្ទាំងគំនូរតាមដងទន្លេមេគង្គនិងទន្លេសាបដ៏ល្បី ល្បាញ។'
    },
    page6: {
      CONTACT: 'ទំនាក់ទំនង',
      content_p1: 'ប្រសិនបើអ្នកមានសំណួរការសាកសួរឬព័ត៌មានពាក់ព័ន្ធផ្សេងទៀតអំពីមាតិកាអាជីវកម្មសូមទាក់ទងមកយើងខ្ញុំ។',
      form_style: 'តំរូវការនៃរចនាប័ទ្ម',
      form_styleA: '西式现代化',
      form_styleB: '法式奢华风',
      form_styleC: '日式简约风',
      form_age: 'អាយុ',
      form_ageA: '25岁以下',
      form_ageB: '25岁～50岁',
      form_ageC: '50岁以上',
      form_reason: 'គោលបំណងនៃការទិញផ្ទះ',
      form_reason_investment: 'វិនិយោគ',
      form_reason_live: 'ស្នាក់នៅ',
      form_foreign: 'តើអ្នកមានបទពិសោធន៏ក្នុងការទិញអចលនៈទ្រព្យនៅក្រៅប្រទេសទេ៖',
      form_foreign_yes: 'មាន',
      form_foreign_no: 'គ្មាន',
      form_country: 'សញ្ជាតិ',
      form_area: 'អាស័យដ្ឋាន',
      form_checkbox: 'ខ្ញុំយល់ស្របនឹងព័ត៌មានខាងលើជាតំណ',
      form_address: 'អាស័យដ្ឋាន',
      form_name: 'ឈ្មោះ',
      form_tel: 'លេខទូរសព្ទ',
      form_message: 'មាតិកា',
      form_email: 'អ៊ីមែល',
      form_checkbtn: 'ដាក់ស្នើ'
    }
  },
  en: {
    text:'ENGLISH',
    title:'VISIONARY GOAL<br>DEVELOPING A BETTER FUTURE',
    title_mob:'VISIONARY GOAL<br>DEVELOPING A<br>BETTER FUTURE',
    gotopage: {
      WHO_WE_ARE: 'WHO WE ARE',
      PHILOSOPHY: 'PHILOSOPHY',
      WHAT_WE_DO: 'WHAT WE DO',
      RELATED_ENTERPRISE: 'RELATED ENTERPRISE',
      CALENDAR: 'CALENDAR',
      CONTACT: 'CONTACT'
    },
    page1: {
      WHO_WE_ARE: 'WHO WE ARE',
      content_p1: 'CTFAS International Real Estate Development Holding Group was established in Cambodia in 2014. In ｚthe past, it has engaged in real estate investment in Daan District and Xinyi Planning District of Taipei, Taiwan for 30 years. The stage fought to Phnom Penh, the capital of Cambodia.',
      content_p2: 'For the next emerging world, the trend of the 1.9 billion ASEAN population, and a 30-year plan and strategy for corporate development with the concept of sustainable management. We start with real estate, then into education, medical field, catering, banking, insurance, entertainment, restaurants, and many other developments and services with ASEAN potential.'
    },
    page2: {
      PHILOSOPHY: 'PHILOSOPHY',
      content_p1: 'CTFAS International Real Estate Development Holding Group is committed to bringing first-class talents, high-quality technology, visionary goals, and intelligent life planning to Cambodia to help local development, educate people, and give back to the mass society. Cambodia is one of the ASEAN allies, the core of Southeast Asia, and the Belt and Road trade hub. In the future, the company will plan a strategic development which will prospect for 30 years, and do the most accurate investment check for every investor.'
    },
    page3: {
      WHAT_WE_DO: 'WHAT WE DO',
      title: 'CTFAS International Real Estate Development Holding Group',
      content_p1: 'In accordance with the development needs of Cambodia at this stage, various projects in housing, medical care, education, catering, finance, tourism and construction, etc. are developed in parallel and complement each other.',
      list_1: 'Real Estate for Houseing',
      list_2: 'Real Estate for Land',
      list_3: 'Restaurent',
      list_4: 'Banking',
      list_5: 'Hospital and Medical Center',
      list_6: 'School',
      list_7: 'Building material Wholesale',
      list_8: 'Hotels'
    },
    page4: {
      RELATED_ENTERPRISE: 'RELATED ENTERPRISE'
    },
    page5: {
      CALENDAR: 'CALENDAR',
      y2014_title: 'New Urban Development',
      y2014_year: '2014',
      y2014_content: 'Starting from 2014, CTFAS Group entered the first year of Cambodia in 2014, and began to plan new urban development projects. From the acquisition of land, development planning, infrastructure construction, to detailed town planning, the whole process was planned carefully. We prepare the urban development to extend the capital of Cambodia in the next 10 years. The emerging city is planned next to the new international airport of Phnom Penh, which has an excellent strategic position in the Southeast Asia Belt and Road Initiative.',
      y2017_title: 'Imperial Crown',
      y2017_year: '2017-2020',
      y2017_content: 'The first masterpiece of the Imperial series uses international standard construction quality and fire protection system. All building materials have passed SGS certification. It is the first baroque 24-hour hotel high-end property building in Phnom Penh and is located in the core embassy zone of Phnom Penh BKK1 , Facing BKK1 Forest High School, and near the future Phnom Penh city subway.',
      y2019_title: 'Technology Forest City',
      y2019_year: '2020-2029',
      y2019_content: 'Modern technology forest city, located in ING Satellite City, Phnom Penh&#39;s emerging city, government agencies, international schools, department stores, luxury villas, commercial buildings, and major internationally renowned brands competing to settle in this area, this area has great drainage system and the most spacious 60-meter Hun Sen avenue, with direct access to the new Phnom Penh International Airport, will be the next 10-year development city in Phnom Penh. CTFAS Group will take the lead in planning the &quot;Modern Scientific and Technological Forest City&quot; in this region in the next 3 years, in preparation for great things to come.',
      y2020_title: 'Imperial Cullinan',
      y2020_year: '2020-mid 2023',
      y2020_content: 'This project is an Imperial series of office buildings. It will also be in the BKK 1 embassy area. In order to meet the convenience needs of foreign business people, it will be a business space that shares office and banking needs in the future. It will solve the traffic congestion of Phnom Penh city in one fell swoop.',
      y20201_title: 'Office Building',
      y20201_year: '2020 - mid2023',
      y20201_content: 'This project is an Imperial series of office buildings. It will also be in the BKK 1 embassy area. In order to meet the convenience needs of foreign business people, it will be a business space that shares office and banking needs in the future. It will solve the traffic congestion of Phnom Penh city in one fell swoop.'
    },
    page6: {
      CONTACT: 'CONTACT',
      content_p1: 'If you have any questions, inquiries or other related information about business content, please contact us.',
      form_style: 'Favorite style',
      form_styleA: '西式现代化',
      form_styleB: '法式奢华风',
      form_styleC: '日式简约风',
      form_age: 'Age',
      form_ageA: '25岁以下',
      form_ageB: '25岁～50岁',
      form_ageC: '50岁以上',
      form_reason: 'Condominium Purchase purpose',
      form_reason_investment: 'investment',
      form_reason_live: 'self-use',
      form_foreign: 'Do you have overseas property experience',
      form_foreign_yes: 'Yes',
      form_foreign_no: 'No',
      form_country: 'Nationality',
      form_area: 'Area',
      form_checkbox: 'I agree with the above information as my contact information.',
      form_address: 'Address',
      form_name: 'Name',
      form_tel: 'Phone',
      form_message: 'Content and Details',
      form_email: 'E-MAIL',
      form_checkbtn: 'SEND'
    }
  },
}

const i18n = new VueI18n({
  locale: 'cn',
  messages,
})

//slick
$(document).ready(function () {
  // //漢堡
  // var $sub_menu = $('#sub_menu'),
  //   $toggle_menu = $sub_menu.find('.toggle_menu'),
  //   $menu = $sub_menu.find('.menu');

  // $(function () {
  //   $toggle_menu.click(function (e) {
  //     $menu.slideToggle();
  //     $('.menu').addClass('is-acted');
  //   });
  // });

  // //語言
  // var $sub_lang = $('#sub_lang'),
  //   $toggle_lang = $sub_lang.find('.toggle_lang'),
  //   $lang = $sub_lang.find('.lang');

  //   $toggle_lang.click(function (e) {
  //     $lang.slideToggle();
  //     $('.lang').addClass('is-acted');
  //   });


  // $('.openphoto').on('click', function () {
  //   var index = $(".openphoto").index(this)
  //   // $('.popup_img').attr("src","img/popup3-" + (index + 1) + ".jpg")
  //   $('.popup_photo' + (index + 1)).addClass('is-acted');
  // });

  $('.popup_close').on('click', function () {
    $('.popup_photo').removeClass('is-acted');
  });

  new Vue({
    el: '#app',
    i18n: i18n,
    data: {
      name: "",
      like_style: "",
      tel: "",
      age: "",
      use: "",
      ope: "",
      email: "",
      address: "",
      message: "",
      selected_country: '',
      selected_city: '',
      countrys: COUNTRYS,
      citys: [],
      needSelectCity: false,
      agree: false
    },
    mounted: function  () {

      $('.slider-for').slick({
        infinite: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
    
      $('.slider-nav').slick({
        infinite: false,
        arrows: false,
        asNavFor: '.slider-for',
        slidesToShow: 9,
        slidesToScroll: 1,
        // dots: true,
        centerMode: true,
        //focusOnSelect: true,
        // prevArrow: $('.prev'),
        // nextArrow: $('.next'),
        swipe:false,
        touchMove:false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 826,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          }
        ]
      });

      $('.prev').on('click', function () {
        var index = $('.slider-nav').slick('slickCurrentSlide')
        if(index == 0){
          $('.slider-nav').slick('slickGoTo', 6)
        }else if (index == 3) {
          $('.slider-nav').slick('slickGoTo', 0)
        }else if (index == 5) {
          $('.slider-nav').slick('slickGoTo', 3)
        }else{
          $('.slider-nav').slick('slickGoTo', 5)
        }
      });
    
      $('.next').on('click', function () {
        var index = $('.slider-nav').slick('slickCurrentSlide')
        if(index == 0){
          $('.slider-nav').slick('slickGoTo', 3)
        }else if (index == 3) {
          $('.slider-nav').slick('slickGoTo', 5)
        }else if (index == 5) {
          $('.slider-nav').slick('slickGoTo', 6)
        }else{
          $('.slider-nav').slick('slickGoTo', 0)
        }
      });
    
      // $('.slider-nav').on('swipe', function (event, slick, direction) {
      //   $('.slider-nav').slick('slickGoTo', 6)
      // });

      $('.smallnav span').on('click', function () {
        $('.smallnav span').removeClass('is-acted');
        $(this).addClass('is-acted');
      });
    
      $('.close').on('click', function () {
        $('.popup').removeClass('is-acted');
        $('input:text').val('');
        $('.message').val('');
      });
    },
    methods: {
      onSelectedCountry: function () {
        this.isFirst = false;
        this.needSelectCity = false;
        this.citys = this.countrys[this.selected_country].CITYS
        if (this.citys != undefined) {
          this.selected_city = this.citys[0].value
          this.needSelectCity = true;
        }
      },
      onSubmit: function () {

        var content =
          "同意以上資料作為聯繫:" + (this.agree ? "同意" : "不同意") + "<br>" +
          "姓名:" + this.name + "<br>" +
          "電話:" + this.tel + "<br>" +
          "年齡:" + this.age + "<br>" +
          "信箱:" + this.email + "<br>" +
          "國籍:" + this.countrys[this.selected_country].TEXT + getCityText(this.selected_country, this.selected_city) + "<br>" +
          "地址:" + this.address + "<br>" +
          "購屋用途:" + this.use + "<br>" +
          "有無海外置產經驗:" + this.ope + "<br>" +
          "留言:" + this.message + "<br>";

        Email.send({
          SecureToken: "e72b0d9a-0075-4eff-8b5e-74df58c177e4", //勿更動
          To: 'wendy198622@gmail.com', //收件者填這 , Cambodia@ctfas-group.com
          From: "customer@ctfas-group.com", //寄件者email，此為虛擬，勿更動
          Subject: "我要預約看房", //信件主旨
          Body: content
        }).then(
          message => {
            if (message == "OK") {
              $(".popup").addClass("is-acted");
            } else {
              console.log(message)
            }
          }
        );
      },

      onClickMenu: function(){
        $('.menu').slideToggle();
        $('.menu').addClass('is-acted');
      },

      onClickLangMenu: function(){
        $('.lang').slideToggle();
        $('.lang').addClass('is-acted');
      },
      onChangeLang: function(lang){
        i18n.locale = lang
        document.querySelector('html').setAttribute('lang', lang)
        $('.lang').slideUp()
      },
      goToItemPage: function(page){
        $('.slider-for').slick('slickGoTo', page);
      },
      goToTop: function(){
        $('html, body').animate({
          scrollTop: 0
        }, 600);
      }
    }
  })

  $('.gotopage').on('click', function () {
    var gotopageid = "#gotopage_" + $(this).data().page
    $('.menu').slideUp()
    $('html, body').animate({
      scrollTop: $(gotopageid).offset().top/* - $(".logo__img").height()*/
    }, 1000)
  });

})

function getCityText(country, city) {
  var country = COUNTRYS[country]

  if (country.CITYS == undefined) {
    return ""
  }
  var str = "";
  country.CITYS.forEach(element => {
    var c = element.value
    if (c == city) {
      str = " 所在都市:" + element.text
    }
  })
  return str
}
