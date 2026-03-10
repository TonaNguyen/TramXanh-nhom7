import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Leaf, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  ChevronRight, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  HelpCircle, 
  Package,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Recycle,
  CreditCard,
  User,
  ShoppingCart,
  CheckCircle2,
  Search,
  Filter
} from 'lucide-react';
import { PRODUCTS, FAQS, Product } from './constants';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    key={undefined} // React handles key specially, we don't need to pass it to motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Header = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'products', label: 'Sản Phẩm' },
    { id: 'policies', label: 'Chính Sách' },
    { id: 'faq', label: 'FAQ' },
    { id: 'packaging', label: 'Quy Cách' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center cursor-pointer group" 
            onClick={() => setActiveTab('home')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-600/20 transition-all duration-300 group-hover:rotate-6 overflow-hidden border border-green-100">
              <img 
                src="image/logo.png" 
                alt="TRẠM XANH Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-[18px] font-bold text-green-900 leading-none tracking-tighter">TRẠM XANH</h1>
              <p className="text-[10px] text-green-600 font-bold mt-1 uppercase tracking-widest">Nông Sản Việt</p>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/50 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' 
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-3 rounded-2xl bg-white/80 backdrop-blur-md text-gray-600 shadow-sm border border-white/20"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-gray-100"
          >
            <div className="px-4 py-8 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-8 py-5 rounded-[25px] text-[16px] font-bold transition-all ${
                    activeTab === item.id ? 'bg-green-600 text-white shadow-xl shadow-green-600/20' : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-[#050a05] text-white pt-32 pb-12 overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-green-600/20 overflow-hidden border border-green-100">
              <img 
                src="image/logo.png" 
                alt="TRẠM XANH Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-[24px] font-bold tracking-tight">TRẠM XANH</h2>
          </div>
          <p className="text-[15px] text-gray-400 leading-relaxed max-w-md mb-10">
            Sứ mệnh của chúng tôi là mang tinh hoa nông sản Việt vào từng giọt thức uống, giúp mỗi người dễ dàng duy trì lối sống lành mạnh và bền vững.
          </p>
          <div className="flex space-x-5">
            {['FB', 'IG', 'ZL', 'TT'].map(s => (
              <motion.button 
                key={s} 
                whileHover={{ y: -5, backgroundColor: '#16a34a' }}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all"
              >
                <span className="text-[12px] font-bold">{s}</span>
              </motion.button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[14px] font-bold mb-8 uppercase tracking-[0.2em] text-green-500">Liên Hệ</h3>
          <ul className="space-y-5 text-[14px] text-gray-300">
            <li className="flex items-start group cursor-pointer">
              <MapPin size={18} className="text-green-500 mr-4 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">22 Hiệp Bình, Hiệp Bình Chánh, Thủ Đức</span>
            </li>
            <li className="flex items-center group cursor-pointer">
              <Phone size={18} className="text-green-500 mr-4 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">0223 223 331</span>
            </li>
            <li className="flex items-center group cursor-pointer">
              <Mail size={18} className="text-green-500 mr-4 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">Tramxanh2026@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[14px] font-bold mb-8 uppercase tracking-[0.2em] text-green-500">Hoạt Động</h3>
          <ul className="space-y-5 text-[14px] text-gray-300">
            <li className="flex items-center">
              <Clock size={18} className="text-green-500 mr-4 shrink-0" />
              <span>Phục vụ: 24/24h</span>
            </li>
            <li className="flex items-center">
              <Globe size={18} className="text-green-500 mr-4 shrink-0" />
              <span>www.tramxanh.vn</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[12px] text-gray-500">© 2026 TRẠM XANH. Thức Uống Từ Nông Sản Việt.</p>
        <div className="flex space-x-8 text-[12px] text-gray-500">
          <button className="hover:text-green-500 transition-colors">Chính sách bảo mật</button>
          <button className="hover:text-green-500 transition-colors">Điều khoản sử dụng</button>
        </div>
      </div>
    </div>
  </footer>
);

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className="space-y-40 pb-40">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
            alt="Healthy Drinks" 
            className="w-full h-full object-cover brightness-[0.35] scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-6 py-2 rounded-full bg-green-600/20 border border-green-500/30 text-green-400 text-[13px] font-bold uppercase tracking-[0.4em] mb-8 backdrop-blur-md"
            >
              Premium Healthy Lifestyle
            </motion.span>
            <h2 className="text-white text-[48px] md:text-[84px] font-bold mb-8 leading-[1] tracking-tighter">
              TRẠM XANH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-200 italic font-serif">
                Lành Mỗi Ngày, Xanh Mỗi Vị
              </span>
            </h2>
            <p className="text-gray-300 text-[18px] md:text-[22px] font-medium mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Khám phá tinh hoa nông sản Việt qua hệ sinh thái đồ uống tự nhiên, giúp cơ thể thanh lọc và tràn đầy năng lượng sống.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-[25px] text-[16px] font-bold transition-all shadow-[0_20px_40px_rgba(22,163,74,0.4)]"
              >
                Đặt Hàng Ngay
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-12 py-5 rounded-[25px] text-[16px] font-bold transition-all"
              >
                Câu Chuyện Thương Hiệu
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-3"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold">Khám phá</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <FadeInWhenVisible>
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-200/40 rounded-full blur-[100px] -z-10"></div>
              <span className="text-green-600 font-bold text-[14px] uppercase tracking-[0.3em] mb-6 block">Về Chúng Tôi</span>
              <h2 className="text-[36px] md:text-[48px] font-bold text-green-900 mb-10 leading-[1.1] tracking-tight">
                Dự Án <span className="italic text-green-700 font-serif">Trạm Xanh</span> <br /> & Giá Trị Bền Vững
              </h2>
              <div className="space-y-8 text-[16px] text-gray-600 leading-relaxed">
                <p>
                  Trạm Xanh ra đời trong bối cảnh người Việt ngày càng quan tâm đến chế độ ăn uống khoa học, xu hướng “eat clean – healthy lifestyle” và các sản phẩm có nguồn gốc tự nhiên.
                </p>
                <p>
                  Chúng tôi cung cấp các dòng sản phẩm như sữa hạt dinh dưỡng, kombucha lên men tự nhiên, nước detox thanh lọc cơ thể và sữa chua tốt cho hệ tiêu hóa. Các sản phẩm được nghiên cứu phù hợp với mọi lứa tuổi, từ học sinh đến người lớn tuổi.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5, zIndex: 10 }}
                      className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-xl"
                    >
                      <img src={`https://picsum.photos/seed/user${i}/150/150`} alt="User" referrerPolicy="no-referrer" />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-[16px] font-bold text-green-900">10,000+</p>
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Khách hàng tin dùng</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-2 gap-8 relative">
            <div className="absolute inset-0 bg-green-600/5 rounded-[60px] -rotate-6 scale-110 -z-10"></div>
            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-8">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1600718374662-0483d2b9da44?q=80&w=1000&auto=format&fit=crop" 
                  className="rounded-[40px] shadow-2xl h-96 w-full object-cover border-8 border-white" 
                  referrerPolicy="no-referrer" 
                />
                <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-green-50">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className="text-[18px] font-bold text-green-900 mb-2">100% Tự Nhiên</h4>
                  <p className="text-[13px] text-gray-500">Không chất bảo quản, không hương liệu tổng hợp.</p>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <div className="space-y-8 pt-16">
                <div className="bg-green-600 p-8 rounded-[40px] shadow-2xl text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <Recycle size={28} />
                  </div>
                  <h4 className="text-[18px] font-bold mb-2">Sống Xanh</h4>
                  <p className="text-[13px] text-green-100">Mô hình tiêu dùng bền vững, tái chế bao bì.</p>
                </div>
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1590701833281-792892957973?q=80&w=1000&auto=format&fit=crop" 
                  className="rounded-[40px] shadow-2xl h-96 w-full object-cover border-8 border-white" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="bg-[#0a1a0a] py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <FadeInWhenVisible>
              <span className="text-green-500 font-bold text-[14px] uppercase tracking-[0.4em] mb-6 block">Core Values</span>
              <h2 className="text-[40px] md:text-[56px] font-bold text-white mb-6 tracking-tight">Tại Sao Chọn Trạm Xanh?</h2>
              <p className="text-gray-400 text-[18px] max-w-2xl mx-auto opacity-80">Chúng tôi tập trung vào 4 trụ cột chính để kiến tạo một cộng đồng sống khỏe.</p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -15, backgroundColor: '#0f250f' }}
              className="md:col-span-2 bg-white/5 backdrop-blur-xl p-12 rounded-[60px] border border-white/10 flex flex-col justify-between transition-colors duration-500"
            >
              <div>
                <div className="w-16 h-16 bg-green-600 rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl shadow-green-600/20">
                  <Heart size={36} />
                </div>
                <h3 className="text-[32px] font-bold text-white mb-6">Giá Trị Sức Khỏe</h3>
                <p className="text-[17px] text-gray-400 leading-relaxed max-w-lg">
                  Cung cấp các sản phẩm giúp bổ sung dinh dưỡng, hỗ trợ tiêu hóa và thanh lọc cơ thể một cách tự nhiên và khoa học nhất.
                </p>
              </div>
              <div className="mt-16 flex items-center gap-6">
                <div className="px-6 py-2 bg-white/5 rounded-full text-[13px] font-bold text-green-400 border border-white/10">#HealthyLifestyle</div>
                <div className="px-6 py-2 bg-white/5 rounded-full text-[13px] font-bold text-green-400 border border-white/10">#PureNature</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-green-600 p-12 rounded-[60px] shadow-2xl shadow-green-600/20 text-white flex flex-col justify-between"
            >
              <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mb-10">
                <Zap size={36} />
              </div>
              <div>
                <h3 className="text-[32px] font-bold mb-6">Giá Trị Tiện Lợi</h3>
                <p className="text-[17px] text-green-100 leading-relaxed">
                  Danh mục sản phẩm đa dạng, phù hợp nhiều nhu cầu và lối sống năng động của người hiện đại.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-emerald-800 p-12 rounded-[60px] shadow-2xl shadow-emerald-900/20 text-white flex flex-col justify-between"
            >
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-10">
                <Recycle size={36} />
              </div>
              <div>
                <h3 className="text-[32px] font-bold mb-6">Giá Trị Bền Vững</h3>
                <p className="text-[17px] text-emerald-100/70 leading-relaxed">
                  Khuyến khích tiêu dùng xanh, tái chế bao bì thủy tinh và giảm thiểu tối đa rác thải nhựa.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -15, backgroundColor: '#0f250f' }}
              className="md:col-span-2 bg-white/5 backdrop-blur-xl p-12 rounded-[60px] border border-white/10 flex items-center gap-16 transition-colors duration-500"
            >
              <div className="hidden sm:block w-56 h-56 bg-white/5 rounded-[40px] overflow-hidden shrink-0 border border-white/10">
                <img src="https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="w-16 h-16 bg-green-600 rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl shadow-green-600/20">
                  <Globe size={36} />
                </div>
                <h3 className="text-[32px] font-bold text-white mb-6">Giá Trị Cộng Đồng</h3>
                <p className="text-[17px] text-gray-400 leading-relaxed">
                  Ưu tiên sử dụng nguyên liệu bản địa, góp phần hỗ trợ nông dân và nâng tầm giá trị nông sản Việt Nam.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeInWhenVisible>
            <div className="group bg-white p-16 rounded-[70px] border border-gray-100 shadow-2xl shadow-green-900/5 relative overflow-hidden transition-all duration-500 hover:border-green-200 hover:shadow-green-900/10">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-20 h-20 bg-green-600 rounded-[28px] flex items-center justify-center text-white mb-12 shadow-2xl shadow-green-600/30 group-hover:rotate-12 transition-transform duration-500">
                <Star size={40} />
              </div>
              <h2 className="text-[32px] font-bold text-green-900 mb-8 tracking-tight">Sứ Mệnh</h2>
              <p className="text-[18px] leading-relaxed text-gray-500 italic font-serif">
                "Trạm Xanh ra đời với sứ mệnh tạo ra những lựa chọn tốt hơn cho sức khỏe và môi trường thông qua các sản phẩm thực phẩm và đồ uống lành mạnh. Chúng tôi cam kết sử dụng nguyên liệu tự nhiên, quy trình an toàn và mô hình kinh doanh có trách nhiệm."
              </p>
            </div>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.2}>
            <div className="group bg-green-900 p-16 rounded-[70px] shadow-2xl shadow-green-900/30 relative overflow-hidden transition-all duration-500 hover:bg-[#0a1a0a]">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-20 h-20 bg-green-500 rounded-[28px] flex items-center justify-center text-white mb-12 shadow-2xl shadow-green-500/30 group-hover:-rotate-12 transition-transform duration-500">
                <Globe size={40} />
              </div>
              <h2 className="text-[32px] font-bold text-white mb-8 tracking-tight">Tầm Nhìn</h2>
              <p className="text-[18px] leading-relaxed text-green-100/80">
                Trạm Xanh hướng tới trở thành thương hiệu thực phẩm và đồ uống healthy được tin dùng hàng đầu tại Việt Nam, tiên phong trong việc kết hợp đa dạng sản phẩm, đổi mới sáng tạo và phát triển bền vững cho xã hội Việt.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};

const ProductsPage = ({ onBuyNow }: { onBuyNow: (p: Product) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  const categories = [
    { 
      name: 'Sữa Hạt', 
      icon: '🌷', 
      color: 'bg-amber-50',
      accent: 'text-amber-600',
      desc: 'Chế biến từ các loại hạt tự nhiên, không chất bảo quản, ít đường, giàu dinh dưỡng.',
      usage: 'Lắc đều, uống lạnh. Dùng bữa sáng, bữa phụ.',
      storage: 'Ngăn mát 2–6°C. Dùng trong 24–48h.',
      ingredients: 'Hạt tự nhiên, nước lọc, đường thô, muối biển.',
      price: { first: '25-30k', exchange: '15-20k' }
    },
    { 
      name: 'Kombucha', 
      icon: '🫦', 
      color: 'bg-rose-50',
      accent: 'text-rose-600',
      desc: 'Trà lên men tự nhiên, giàu lợi khuẩn, hỗ trợ hệ tiêu hóa và thanh lọc cơ thể.',
      usage: 'Uống trực tiếp sau ăn. Người mới dùng 200-300ml/ngày.',
      storage: 'Luôn bảo quản lạnh 2–6°C. Không lắc mạnh.',
      ingredients: 'Trà đen/xanh, men SCOBY, đường mía, trái cây.',
      price: { first: '35-40k', exchange: '25-30k' }
    },
    { 
      name: 'Nước Detox', 
      icon: '🌿', 
      color: 'bg-emerald-50',
      accent: 'text-emerald-600',
      desc: 'Pha chế từ trái cây tươi, thảo mộc và hạt chia, giúp giải nhiệt và làm đẹp da.',
      usage: 'Lắc đều. Uống sáng hoặc giữa ngày.',
      storage: 'Ngăn mát. Dùng trong 24h.',
      ingredients: 'Nước lọc, hạt chia, trái cây tươi, thảo mộc.',
      price: { first: '20-25k', exchange: '15-20k' }
    },
    { 
      name: 'Sữa Chua Uống', 
      icon: '🍌', 
      color: 'bg-blue-50',
      accent: 'text-blue-600',
      desc: 'Sữa lên men tự nhiên, kết hợp hương vị truyền thống và hiện đại.',
      usage: 'Lắc đều, uống lạnh sau bữa ăn.',
      storage: 'Nhiệt độ 2–6°C. Dùng trong 24h. Không đông đá.',
      ingredients: 'Sữa tươi/hạt, men sữa chua, trái cây xay.',
      price: { first: '30-35k', exchange: '20-25k' }
    }
  ];

  const filteredCategories = categories.filter(cat => 
    selectedCategory === 'Tất cả' || cat.name === selectedCategory
  );

  const filterProducts = (catName: string) => {
    return PRODUCTS.filter(p => 
      p.category === catName && 
      (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.code.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-600 font-bold text-[14px] uppercase tracking-[0.4em] mb-6 block">Healthy Menu</span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-green-900 mb-8 tracking-tight">Danh Mục Sản Phẩm</h2>
          <p className="text-[18px] text-gray-500 leading-relaxed opacity-80">
            Hệ sinh thái hơn 30 dòng sản phẩm lành mạnh, được nghiên cứu kỹ lưỡng để mang lại giá trị dinh dưỡng tối ưu cho cơ thể bạn.
          </p>
        </motion.div>
      </div>

      {/* Search and Filter Bar */}
      <div className="sticky top-24 z-40 bg-[#fcfdfa]/80 backdrop-blur-xl py-6 border-y border-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-3">
            {['Tất cả', ...categories.map(c => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-2xl text-[13px] font-bold transition-all duration-300 ${
                  selectedCategory === cat 
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' 
                    : 'bg-white text-gray-500 border border-gray-100 hover:border-green-200 hover:text-green-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-8 py-4 bg-white border border-gray-100 rounded-2xl text-[15px] focus:border-green-600 outline-none transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="space-y-40">
        {filteredCategories.map((cat, idx) => {
          const products = filterProducts(cat.name);
          if (products.length === 0 && searchQuery !== '') return null;

          return (
            <FadeInWhenVisible key={idx}>
              <section className="space-y-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-gray-100 pb-12">
                  <div className="flex items-center gap-10">
                    <div className={`w-24 h-24 ${cat.color} rounded-[40px] flex items-center justify-center text-5xl shadow-inner border border-white/50`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className={`text-[32px] font-bold ${cat.accent} uppercase tracking-tight`}>{cat.name}</h3>
                      <p className="text-[16px] text-gray-400 italic max-w-lg mt-2">{cat.desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="px-8 py-4 bg-white rounded-[25px] border border-gray-100 shadow-sm">
                      <span className="text-[11px] text-gray-400 uppercase font-bold block mb-1">Mua lần đầu</span>
                      <span className="text-[18px] font-bold text-gray-800">{cat.price.first}</span>
                    </div>
                    <div className="px-8 py-4 bg-green-600 rounded-[25px] shadow-2xl shadow-green-600/30">
                      <span className="text-[11px] text-green-200 uppercase font-bold block mb-1">Đổi chai</span>
                      <span className="text-[18px] font-bold text-white">{cat.price.exchange}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                  <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {products.map(product => (
                      <motion.div 
                        key={product.id} 
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group bg-white rounded-[45px] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-green-100 transition-all duration-500 overflow-hidden"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-6 left-6">
                            <span className="text-[11px] font-bold text-green-600 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm">{product.code}</span>
                          </div>
                        </div>
                        <div className="p-8">
                          <h4 className="text-[18px] font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors leading-tight h-14 line-clamp-2">{product.name}</h4>
                          <div className="flex items-center justify-between pt-6 border-t border-gray-50 mb-8">
                            <div className="text-[12px] text-gray-400 font-medium">Giá đổi chai</div>
                            <div className="text-[18px] font-bold text-green-600">{product.priceExchange}</div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <motion.button 
                              whileTap={{ scale: 0.95 }}
                              onClick={() => onBuyNow(product)}
                              className="py-4 bg-green-600 text-white rounded-2xl text-[13px] font-bold shadow-lg shadow-green-600/20 hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                            >
                              <ShoppingCart size={16} />
                              Mua ngay
                            </motion.button>
                            <motion.button 
                              whileTap={{ scale: 0.95 }}
                              className="py-4 bg-white border border-green-600 text-green-600 rounded-2xl text-[13px] font-bold hover:bg-green-50 transition-all flex items-center justify-center gap-2"
                            >
                              Thêm
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {products.length === 0 && searchQuery !== '' && (
                      <div className="col-span-full py-20 text-center">
                        <p className="text-gray-400 font-medium">Không tìm thấy sản phẩm nào phù hợp với "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-[#0a1a0a] text-white p-10 rounded-[50px] shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <HelpCircle size={120} />
                      </div>
                      <h4 className="text-[15px] font-bold mb-10 uppercase tracking-[0.2em] text-green-500">Thông Tin Nhóm</h4>
                      <div className="space-y-10">
                        <div>
                          <span className="text-[11px] text-gray-500 uppercase font-bold block mb-3 tracking-widest">Cách dùng</span>
                          <p className="text-[14px] text-gray-300 leading-relaxed font-medium">{cat.usage}</p>
                        </div>
                        <div>
                          <span className="text-[11px] text-gray-500 uppercase font-bold block mb-3 tracking-widest">Bảo quản</span>
                          <p className="text-[14px] text-gray-300 leading-relaxed font-medium">{cat.storage}</p>
                        </div>
                        <div>
                          <span className="text-[11px] text-gray-500 uppercase font-bold block mb-3 tracking-widest">Thành phần</span>
                          <p className="text-[14px] text-gray-300 leading-relaxed font-medium">{cat.ingredients}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-10 bg-green-50 rounded-[50px] border border-green-100">
                      <p className="text-[13px] text-green-800 italic leading-relaxed font-medium">
                        * Trạm Xanh cam kết 100% sản phẩm được đóng trong chai thủy tinh tinh khiết để bảo tồn trọn vẹn hương vị và dưỡng chất.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </FadeInWhenVisible>
          );
        })}
      </div>
    </div>
  );
};

const PoliciesPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-40">
    <div className="text-center max-w-3xl mx-auto">
      <FadeInWhenVisible>
        <span className="text-green-600 font-bold text-[14px] uppercase tracking-[0.4em] mb-6 block">Customer Care</span>
        <h2 className="text-[40px] md:text-[56px] font-bold text-green-900 mb-8 tracking-tight">Chính Sách & Điều Khoản</h2>
        <p className="text-[18px] text-gray-500">Minh bạch trong mọi quy trình để mang lại trải nghiệm an tâm nhất cho khách hàng.</p>
      </FadeInWhenVisible>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <h3 className="text-[22px] font-bold text-green-900 mb-12 flex items-center">
          <span className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mr-5 shadow-inner"><ShieldCheck size={24} /></span>
          Hỗ Trợ Khách Hàng
        </h3>
        <div className="grid gap-6">
          {[
            { title: 'Đổi trả sản phẩm', desc: 'Đổi sản phẩm nếu lỗi do sản xuất hoặc vận chuyển. Điều kiện: nguyên tem nhãn, chưa qua sử dụng.' },
            { title: 'Hoàn tiền', desc: 'Hoàn tiền khi không thể đổi mới hoặc không đáp ứng thỏa thuận (lỗi từ nhà cung cấp).' },
            { title: 'Chăm sóc sau bán', desc: 'Tiếp nhận phản hồi, góp ý về chất lượng để cải thiện dịch vụ.' },
            { title: 'Bảo mật thông tin', desc: 'Thông tin cá nhân được bảo mật tuyệt đối, chỉ dùng cho mục đích mua bán.' },
            { title: 'Ưu đãi - Khuyến mãi', desc: 'Tích điểm cho khách thân thiết và chương trình tái chế chai thủy tinh.' },
          ].map((p, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 15, backgroundColor: '#f0fdf4' }}
              className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-500"
            >
              <h4 className="text-[16px] font-bold text-gray-800 mb-3">{p.title}</h4>
              <p className="text-[14px] text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-[22px] font-bold text-green-900 mb-12 flex items-center">
          <span className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mr-5 shadow-inner"><Truck size={24} /></span>
          Vận Chuyển & Giao Hàng
        </h3>
        <div className="bg-[#0a1a0a] text-white p-12 rounded-[60px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Truck size={200} />
          </div>
          <div className="space-y-12 relative z-10">
            <div>
              <h4 className="text-[16px] font-bold mb-8 text-green-500 uppercase tracking-[0.2em]">Phí vận chuyển</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span className="text-[15px] text-gray-400">Nội thành (Thủ Đức, Q1, Q3...)</span>
                  <span className="text-[17px] font-bold">15.000 VNĐ</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span className="text-[15px] text-gray-400">Đơn hàng từ 200.000 VNĐ</span>
                  <span className="text-[18px] font-bold text-green-400 tracking-wider">FREESHIP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-gray-400">Khu vực lân cận</span>
                  <span className="text-[17px] font-bold">20k - 30k</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-[16px] font-bold mb-8 text-green-500 uppercase tracking-[0.2em]">Quy định giao nhận</h4>
              <ul className="space-y-6 text-[15px] text-gray-300">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                  Giao hàng siêu tốc trong 30 - 60 phút.
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                  Đơn hàng tối thiểu: 50.000 VNĐ.
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                  Chuỗi lạnh được duy trì suốt hành trình.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-40">
      <div className="text-center mb-24">
        <FadeInWhenVisible>
          <span className="text-green-600 font-bold text-[14px] uppercase tracking-[0.4em] mb-6 block">Support Center</span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-green-900 mb-6 tracking-tight">Câu Hỏi Thường Gặp</h2>
          <p className="text-gray-500 text-[18px]">Mọi thắc mắc của bạn đều được giải đáp chi tiết tại đây.</p>
        </FadeInWhenVisible>
      </div>
      <div className="space-y-6">
        {FAQS.map((faq, i) => (
          <motion.div 
            key={i} 
            initial={false}
            className={`border rounded-[40px] overflow-hidden transition-all duration-500 ${
              openIndex === i ? 'border-green-600 bg-green-50/40 shadow-xl shadow-green-900/5' : 'border-gray-100 bg-white shadow-sm'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-10 text-left"
            >
              <span className={`text-[17px] font-bold transition-colors duration-500 ${openIndex === i ? 'text-green-800' : 'text-gray-800'}`}>
                {faq.q}
              </span>
              <motion.div 
                animate={{ rotate: openIndex === i ? 180 : 0, backgroundColor: openIndex === i ? '#16a34a' : '#f9fafb', color: openIndex === i ? '#fff' : '#9ca3af' }}
                className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="px-10 pb-10 text-[16px] text-gray-500 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const PackagingPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-40">
    <div className="text-center max-w-3xl mx-auto">
      <FadeInWhenVisible>
        <span className="text-green-600 font-bold text-[14px] uppercase tracking-[0.4em] mb-6 block">Quality Control</span>
        <h2 className="text-[40px] md:text-[56px] font-bold text-green-900 mb-8 tracking-tight">Quy Cách Đóng Gói</h2>
        <p className="text-[18px] text-gray-500 leading-relaxed">Chúng tôi áp dụng quy trình đóng chai thủy tinh khép kín để đảm bảo an toàn vệ sinh thực phẩm tuyệt đối.</p>
      </FadeInWhenVisible>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-8 space-y-24">
        <section className="space-y-12">
          <h3 className="text-[24px] font-bold text-green-900 flex items-center">
            <span className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mr-5 shadow-inner"><Package size={24} /></span>
            Quy trình đóng nắp tiêu chuẩn
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { step: '01', title: 'Vệ sinh - Tiệt trùng', desc: 'Chai thủy tinh được rửa sạch và tiệt trùng bằng hơi nước nóng 100°C. Nắp được khử trùng trong môi trường vô khuẩn.' },
              { step: '02', title: 'Chiết rót sản phẩm', desc: 'Sử dụng thiết bị chiết rót tự động. Chừa khoảng không an toàn ở cổ chai để duy trì áp suất tự nhiên.' },
              { step: '03', title: 'Đóng nắp chân không', desc: 'Máy đóng nắp siết lực đồng đều, đảm bảo kín khí tuyệt đối, không rò rỉ và không lọt vi khuẩn.' },
              { step: '04', title: 'Kiểm định chất lượng', desc: 'Kiểm tra độ kín bằng phương pháp lắc áp suất. Loại bỏ 100% sản phẩm không đạt chuẩn thẩm mỹ.' },
            ].map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-10 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-[32px] font-bold text-green-100 mb-6">{s.step}</div>
                <h4 className="text-[18px] font-bold text-gray-800 mb-4">{s.title}</h4>
                <p className="text-[15px] text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-green-50 p-16 rounded-[70px] border border-green-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <ShieldCheck size={150} />
          </div>
          <h3 className="text-[24px] font-bold text-green-900 mb-12 flex items-center relative z-10">
            <span className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 mr-5 shadow-sm"><ShieldCheck size={24} /></span>
            Yêu cầu riêng biệt
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 relative z-10">
            <div className="space-y-5">
              <h4 className="text-[16px] font-bold text-green-800 uppercase tracking-widest">Sữa Hạt</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed font-medium">Đóng kín hoàn toàn, màng seal bảo vệ bên ngoài nắp. Bảo quản ngay ở nhiệt độ 2–6°C.</p>
            </div>
            <div className="space-y-5">
              <h4 className="text-[16px] font-bold text-green-800 uppercase tracking-widest">Kombucha</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed font-medium">Sử dụng nắp chịu áp suất nhẹ. Không lắc mạnh sau khi đóng nắp để tránh trào gas tự nhiên.</p>
            </div>
            <div className="space-y-5">
              <h4 className="text-[16px] font-bold text-green-800 uppercase tracking-widest">Nước Detox</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed font-medium">Đóng kín tuyệt đối, có tem niêm phong đảm bảo an toàn vệ sinh thực phẩm cho người dùng.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4 space-y-10">
        <div className="bg-[#050a05] text-white p-12 rounded-[60px] shadow-2xl space-y-10 sticky top-32 border border-white/5">
          <h3 className="text-[18px] font-bold uppercase tracking-[0.3em] text-green-500">Thông Số Bao Bì</h3>
          <div className="space-y-10">
            <div className="group">
              <h4 className="text-[12px] font-bold text-gray-500 uppercase mb-3 group-hover:text-green-400 transition-colors tracking-widest">Loại chai</h4>
              <p className="text-[16px] text-gray-300 leading-relaxed font-medium">Thủy tinh trong suốt cao cấp. Dung tích 250ml & 330ml. Chịu nhiệt và áp suất nhẹ.</p>
            </div>
            <div className="group">
              <h4 className="text-[12px] font-bold text-gray-500 uppercase mb-3 group-hover:text-green-400 transition-colors tracking-widest">Loại nắp</h4>
              <p className="text-[16px] text-gray-300 leading-relaxed font-medium">Kim loại vặn (thiếc/nhôm), ron cao su thực phẩm, chống gỉ sét, kín khí tuyệt đối.</p>
            </div>
            <div className="pt-10 border-t border-white/10">
              <div className="flex items-start gap-4 text-red-400">
                <ShieldCheck size={20} className="shrink-0 mt-1" />
                <p className="text-[14px] italic leading-relaxed font-medium">Cam kết không tái sử dụng nắp đã mở. Đảm bảo 100% nắp mới cho mỗi sản phẩm xuất xưởng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CheckoutPage = ({ product, onBack }: { product: Product | null, onBack: () => void }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!product) return null;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto px-4 py-40 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-16 rounded-[60px] shadow-2xl border border-green-100"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-10">
            <CheckCircle2 size={60} />
          </div>
          <h2 className="text-[32px] font-bold text-green-900 mb-6">Đặt Hàng Thành Công!</h2>
          <p className="text-[16px] text-gray-500 mb-12 leading-relaxed">
            Cảm ơn bạn đã tin tưởng Trạm Xanh. Chúng tôi sẽ liên hệ xác nhận đơn hàng trong vòng 5-10 phút tới.
          </p>
          <button 
            onClick={onBack}
            className="bg-green-600 text-white px-12 py-5 rounded-[25px] text-[16px] font-bold shadow-xl shadow-green-600/20"
          >
            Tiếp tục mua sắm
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-green-600 font-bold text-[14px] mb-12 transition-colors"
      >
        <ArrowRight size={18} className="rotate-180" /> Quay lại sản phẩm
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-[32px] font-bold text-green-900 tracking-tight">Thông Tin Thanh Toán</h2>
          <form onSubmit={handleOrder} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Họ và tên</label>
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input required type="text" placeholder="Nguyễn Văn A" className="w-full pl-14 pr-8 py-5 bg-white border border-gray-100 rounded-[25px] text-[15px] focus:border-green-600 outline-none transition-all shadow-sm" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Số điện thoại</label>
                <div className="relative">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input required type="tel" placeholder="0901 234 567" className="w-full pl-14 pr-8 py-5 bg-white border border-gray-100 rounded-[25px] text-[15px] focus:border-green-600 outline-none transition-all shadow-sm" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Địa chỉ nhận hàng</label>
              <div className="relative">
                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input required type="text" placeholder="Số nhà, tên đường, phường/xã..." className="w-full pl-14 pr-8 py-5 bg-white border border-gray-100 rounded-[25px] text-[15px] focus:border-green-600 outline-none transition-all shadow-sm" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Ghi chú đơn hàng</label>
              <textarea placeholder="Ví dụ: Giao giờ hành chính, ít đường..." className="w-full px-8 py-5 bg-white border border-gray-100 rounded-[25px] text-[15px] focus:border-green-600 outline-none transition-all shadow-sm h-32 resize-none"></textarea>
            </div>
            <div className="pt-8">
              <h3 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-6">Phương thức thanh toán</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="relative flex items-center p-6 bg-white border-2 border-green-600 rounded-[30px] cursor-pointer shadow-xl shadow-green-900/5">
                  <CreditCard className="text-green-600 mr-4" size={24} />
                  <span className="text-[15px] font-bold text-green-900">Thanh toán khi nhận hàng (COD)</span>
                </label>
                <label className="relative flex items-center p-6 bg-gray-50 border-2 border-transparent rounded-[30px] cursor-not-allowed opacity-50">
                  <Globe className="text-gray-400 mr-4" size={24} />
                  <span className="text-[15px] font-bold text-gray-400">Chuyển khoản ngân hàng (Sắp có)</span>
                </label>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-6 bg-green-600 text-white rounded-[30px] text-[18px] font-bold shadow-2xl shadow-green-600/30 hover:bg-green-700 transition-all mt-12"
            >
              Xác Nhận Đặt Hàng
            </motion.button>
          </form>
        </div>

        <div className="lg:sticky lg:top-32 h-fit">
          <div className="bg-white p-12 rounded-[60px] border border-gray-100 shadow-2xl">
            <h3 className="text-[20px] font-bold text-green-900 mb-10">Tóm tắt đơn hàng</h3>
            <div className="flex gap-8 mb-10 pb-10 border-b border-gray-50">
              <div className="w-32 h-32 rounded-[30px] overflow-hidden shrink-0 shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[11px] font-bold text-green-600 uppercase mb-2">{product.code}</span>
                <h4 className="text-[18px] font-bold text-gray-800 mb-2">{product.name}</h4>
                <p className="text-[14px] text-gray-400 font-medium">{product.category}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-gray-400 font-medium">Giá sản phẩm (Lần đầu)</span>
                <span className="font-bold text-gray-800">{product.priceFirst}</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-gray-400 font-medium">Phí vận chuyển</span>
                <span className="font-bold text-gray-800">15.000 VNĐ</span>
              </div>
              <div className="pt-8 mt-8 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[18px] font-bold text-green-900">Tổng cộng</span>
                <div className="text-right">
                  <span className="text-[24px] font-bold text-green-600">{product.priceFirst}</span>
                  <p className="text-[10px] text-gray-400 italic mt-1">* Chưa bao gồm phí ship (nếu có)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-8 bg-green-50 rounded-[40px] border border-green-100 flex items-start gap-4">
            <ShieldCheck className="text-green-600 shrink-0" size={20} />
            <p className="text-[13px] text-green-800 font-medium leading-relaxed">
              Trạm Xanh cam kết bảo mật thông tin cá nhân và chất lượng sản phẩm tuyệt đối khi đến tay khách hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('checkout');
  };

  return (
    <div className="min-h-screen flex flex-col font-serif selection:bg-green-100 selection:text-green-900 bg-[#fcfdfa]">
      <Header activeTab={activeTab === 'checkout' ? 'products' : activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === 'home' && <HomePage />}
            {activeTab === 'products' && <ProductsPage onBuyNow={handleBuyNow} />}
            {activeTab === 'policies' && <PoliciesPage />}
            {activeTab === 'faq' && <FAQPage />}
            {activeTab === 'packaging' && <PackagingPage />}
            {activeTab === 'checkout' && <CheckoutPage product={selectedProduct} onBack={() => setActiveTab('products')} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
