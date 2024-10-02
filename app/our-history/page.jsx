import Link from "next/link"

export default function OurHistory() {
  return (
    <div className="page-section">
      <div className="page-section-inner">
        <Link href="/" className="small-link">
          &laquo; Back to home
        </Link>

        <h2 className="page-section-title">Our History!</h2>
        <div className="generic-page-content">
          <section id="our-history">
            <p>The story of Pet Adoption began in early 2023 with a simple yet powerful idea: to make it easier for homeless animals to find loving families. It all started when our founder, Aryan Purshottam Chaudhari, noticed how difficult it could be for people to adopt pets, especially in an era where most processes were still offline, fragmented, or complicated. Inspired by his love for animals and technology, Aryan set out to create a platform that could bridge the gap between people looking to adopt and pets in need of a home.</p>

            <h3>The Early Days</h3>
            <p>In the early stages, our platform was a small project built with the aim of creating a seamless, online experience for pet adoption. We wanted to make it easy for anyone to browse through available pets, find detailed information, and take action to adopt—all from the comfort of their own home. The first version of the platform allowed users to scroll through listings and express interest in pets, while the admin side was focused on managing pets and handling inquiries manually.</p>

            <h3>Growing Our Platform</h3>
            <p>As interest in the website grew, so did the need for more advanced features. In response, we developed a user-friendly dashboard for administrators, allowing pet shelters and animal caregivers to add, edit, and manage pet profiles with ease. We also incorporated email notifications so that both users and admins could stay informed about adoption inquiries in real time.</p>

            <p>Our technical team worked hard to ensure that the system was built on a robust tech stack using React, Next.js, Express.js, and MongoDB. The platform was hosted on Netlify and Vercel to offer the best performance and reliability. We also integrated the Mailtrap service for email notifications, ensuring smooth communication between potential adopters and shelter administrators.</p>

            <h3>Community and Teamwork</h3>
            <p>As the platform evolved, we recognized the need for better communication within our team. We introduced a live chat feature, powered by Pusher and React, to enable real-time collaboration between team members. This feature allowed our staff, spread across different locations, to work together more efficiently to support the growing number of users and adoption inquiries.</p>

            <h3>A Commitment to Animal Welfare</h3>
            <p>What started as a small project quickly grew into a full-fledged platform for animal welfare. We’ve expanded our vision to not only facilitate adoptions but to also raise awareness about animal care, foster programs, and the importance of responsible pet ownership. Our mission is to ensure that every animal has the chance to find a safe, loving home.</p>

            <p>Through partnerships with local shelters and rescue organizations, we’ve been able to help numerous animals find families. The feedback from adopters, shelters, and our community has been overwhelming, encouraging us to continue improving the platform and adding new features.</p>

            <h3>Today and Beyond</h3>
            <p>Today, Pet Adoption is more than just a website; it’s a growing community of animal lovers, shelter volunteers, and dedicated team members working towards a common goal. We believe that technology has the power to change lives—not just for humans but for animals too. Our journey doesn’t stop here. With plans to introduce new features such as fostering programs, volunteer opportunities, and educational resources, we aim to continue making a positive impact on the lives of animals and the families who adopt them.</p>

            <p>Together, we are creating a world where every pet can find a place to call home.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
