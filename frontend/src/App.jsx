const benefits = [
  {
    number: '01',
    icon: '◇',
    title: 'Minh bạch từng bước',
    description: 'Theo dõi diễn biến phiên đấu giá và biết rõ thông tin của từng sản phẩm trước khi tham gia.',
  },
  {
    number: '02',
    icon: '↗',
    title: 'Cập nhật tức thì',
    description: 'Nắm bắt mức giá và thời gian còn lại để luôn chủ động với quyết định của mình.',
  },
  {
    number: '03',
    icon: '✳',
    title: 'Dễ dàng bắt đầu',
    description: 'Một trải nghiệm rõ ràng, gọn gàng và thuận tiện trên cả điện thoại lẫn máy tính.',
  },
]

const steps = [
  { number: '01', title: 'Khám phá', description: 'Tìm hiểu những sản phẩm và phiên đấu giá bạn quan tâm.' },
  { number: '02', title: 'Theo dõi', description: 'Xem thông tin, mức giá và diễn biến của phiên đấu giá.' },
  { number: '03', title: 'Tham gia', description: 'Sẵn sàng đưa ra mức giá của bạn khi nền tảng mở cửa.' },
]

function Brand() {
  return (
    <a className="brand" href="#dau-trang" aria-label="Auctio, về đầu trang">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span>auctio<span className="brand-dot">.</span></span>
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="nav-links" aria-label="Điều hướng chính">
          <a href="#loi-ich">Lợi ích</a>
          <a href="#cach-hoat-dong">Cách hoạt động</a>
        </nav>
        <a className="header-link" href="#bat-dau">Khám phá ngay <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}

function AuctionPreview() {
  return (
    <div className="preview-wrap" aria-label="Minh họa giao diện phiên đấu giá">
      <div className="preview-glow" />
      <div className="preview-card">
        <div className="preview-image">
          <div className="preview-grid" />
          <div className="pedestal pedestal-back" />
          <div className="vase"><div className="vase-neck" /><div className="vase-body" /><div className="vase-shine" /></div>
          <div className="pedestal pedestal-front" />
          <span className="preview-tag">BỘ SƯU TẬP ĐẶC BIỆT</span>
        </div>
        <div className="preview-info">
          <div><span className="preview-kicker">PHIÊN ĐẤU GIÁ MẪU</span><h3>Bình gốm nghệ thuật</h3></div>
          <span className="preview-status"><span /> Sắp diễn ra</span>
        </div>
        <div className="preview-meta"><span>Một trải nghiệm đáng mong chờ</span><span aria-hidden="true">↗</span></div>
      </div>
      <div className="floating-note"><span className="note-icon" aria-hidden="true">✦</span><span>Khám phá những điều<br /><strong>đáng giá mỗi ngày</strong></span></div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="dau-trang">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-line" /> NỀN TẢNG ĐẤU GIÁ TRỰC TUYẾN</span>
          <h1>Giá trị mới.<br /><em>Cơ hội mới.</em></h1>
          <p>Một không gian để khám phá những món đồ thú vị, theo dõi phiên đấu giá và sẵn sàng nắm bắt cơ hội của riêng bạn.</p>
          <div className="hero-actions"><a className="button button-primary" href="#loi-ich">Tìm hiểu thêm <span aria-hidden="true">↗</span></a><a className="text-link" href="#cach-hoat-dong">Cách hoạt động <span aria-hidden="true">↓</span></a></div>
          <div className="hero-caption"><span className="caption-symbol" aria-hidden="true">✳</span><span>Đơn giản để bắt đầu.<br />Thú vị để khám phá.</span></div>
        </div>
        <AuctionPreview />
      </div>
      <div className="hero-bottom container"><span>KHÁM PHÁ · THEO DÕI · THAM GIA</span><span>CUỘN ĐỂ TÌM HIỂU <span aria-hidden="true">↓</span></span></div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="benefits section" id="loi-ich">
      <div className="container">
        <div className="section-heading"><div><span className="section-label">01 / VÌ SAO CHỌN AUCTIO</span><h2>Mỗi phiên đấu giá,<br /><em>một trải nghiệm rõ ràng.</em></h2></div><p>Chúng tôi thiết kế hành trình đấu giá để bạn dễ khám phá, dễ theo dõi và tự tin hơn trong từng lựa chọn.</p></div>
        <div className="benefit-grid">{benefits.map((benefit) => <article className="benefit-card" key={benefit.number}><div className="benefit-top"><span>{benefit.number} / 03</span><span className="benefit-icon" aria-hidden="true">{benefit.icon}</span></div><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}</div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="how section" id="cach-hoat-dong">
      <div className="container how-layout"><div className="how-intro"><span className="section-label">02 / CÁCH HOẠT ĐỘNG</span><h2>Ba bước để<br /><em>bắt đầu hành trình.</em></h2><p>Từ một món đồ khiến bạn tò mò đến khoảnh khắc tham gia phiên đấu giá: mọi thứ bắt đầu thật đơn giản.</p><a className="text-link" href="#bat-dau">Sẵn sàng khám phá <span aria-hidden="true">↗</span></a></div><div className="steps">{steps.map((step) => <article className="step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><span className="step-arrow" aria-hidden="true">↗</span></article>)}</div></div>
    </section>
  )
}

function Closing() {
  return (
    <section className="closing" id="bat-dau"><div className="container closing-inner"><span className="section-label">ĐIỀU THÚ VỊ ĐANG CHỜ PHÍA TRƯỚC</span><h2>Bạn đã sẵn sàng<br /><em>khám phá?</em></h2><p>Auctio đang được xây dựng. Hãy quay lại để đón xem những phiên đấu giá đầu tiên.</p><a className="button button-light" href="#dau-trang">Về đầu trang <span aria-hidden="true">↑</span></a><span className="closing-ornament" aria-hidden="true">✳</span></div></section>
  )
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><Brand /><span>© {new Date().getFullYear()} Auctio. Một cách mới để khám phá giá trị.</span><a href="#dau-trang">Lên đầu trang ↑</a></div></footer>
}

export default function App() {
  return <><Header /><main><Hero /><Benefits /><HowItWorks /><Closing /></main><Footer /></>
}
