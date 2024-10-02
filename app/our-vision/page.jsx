import Link from "next/link"

export default function OurVision() {
  return (
    <div className="page-section">
      <div className="page-section-inner">
        <Link href="/" className="small-link">
          &laquo; Back to home
        </Link>

        <h2 className="page-section-title">Our Vision</h2>
        <div className="generic-page-content">
          <section id="our-vision">
            <p>Imagine a world where every pet finds a loving home, where wagging tails and purring companions greet their forever families. At <strong>Pet Adoption</strong>, our vision is simple yet profound: <em>to transform the way people connect with animals in need.</em></p>

            <p>We believe that adopting a pet isn’t just about finding an animal, it’s about finding a companion, a friend, a new family member. Our platform is designed to make this heartwarming connection as easy as possible, bringing people and pets together in a seamless, joyful experience.</p>

            <p>What drives us is the idea that for every pet waiting for a home, there is a family ready to love them. Whether it’s the first click on a pet’s photo or the final step of taking them home, we want to make that journey memorable, meaningful, and magical.</p>

            <p>We’re not just a website; we’re a bridge. A bridge that links families with the unconditional love of a pet, while making the process efficient, transparent, and, most of all, humane. Every pet deserves a second chance, and we’re here to help make that happen—one adoption at a time.</p>

            <p><strong>Join us</strong> in our mission to create a brighter future for every animal, where no pet is left behind, and every family finds their perfect companion. Together, we’re building a community that cares—one adoption, one success story, and one happy home at a time.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
