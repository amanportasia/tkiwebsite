"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import amanportasiaLogo from "../images/amanportasia.png";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/contact", label: "Contact Person" }
];

const TOP_VISIBLE_OFFSET = 24;
const HIDE_AFTER_OFFSET = 96;
const SCROLL_DELTA_THRESHOLD = 8;

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const pathname = usePathname();
  const previousScrollYRef = useRef(0);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsHeaderVisible(true);
      return undefined;
    }

    const getScrollY = () => window.scrollY || document.documentElement.scrollTop || 0;

    previousScrollYRef.current = getScrollY();

    const handleScroll = () => {
      if (animationFrameRef.current) {
        return;
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        const currentScrollY = getScrollY();
        const previousScrollY = previousScrollYRef.current;
        const scrollDifference = currentScrollY - previousScrollY;
        const isNearTop = currentScrollY <= TOP_VISIBLE_OFFSET;
        const hasMovedEnough = Math.abs(scrollDifference) >= SCROLL_DELTA_THRESHOLD;

        if (isNearTop || (hasMovedEnough && scrollDifference < 0)) {
          setIsHeaderVisible(true);
        } else if (hasMovedEnough && scrollDifference > 0 && currentScrollY > HIDE_AFTER_OFFSET) {
          setIsHeaderVisible(false);
        }

        previousScrollYRef.current = currentScrollY;
        animationFrameRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`site-header navbar navbar-dark p-0${!isHeaderVisible ? " site-header-hidden" : ""}`}>
        <div className="site-header-inner">
          <div className="site-header-row">
            <Link
              href="/"
              className="navbar-brand brand m-0"
              aria-label="Informasi Lowongan Kerja Luar negri"
              onClick={closeMenu}
            >
              <span className="brand-logo-frame">
                <Image
                  className="brand-logo"
                  src={amanportasiaLogo}
                  alt="Informasi Lowongan Kerja Luar negri"
                  fill
                  quality={100}
                  sizes="(max-width: 576px) 62px, 88px"
                  priority
                />
              </span>
            </Link>
            <button
              className="navbar-toggler custom-toggler border-0 shadow-none p-0"
              type="button"
              aria-controls="mainMenu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              onClick={() => setIsMenuOpen((currentState) => !currentState)}
            >
              <span className="hamburger-lines" aria-hidden="true">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </span>
            </button>
          </div>

          {isMenuOpen && (
            <>
              <button
                type="button"
                className="menu-backdrop fixed z-40"
                aria-label="Tutup menu"
                onClick={closeMenu}
              ></button>
              <nav
                className="menu-drawer z-50 shadow-2xl rounded-xl bg-white"
                id="mainMenu"
                aria-labelledby="mainMenuLabel"
              >
                <div className="menu-popup-header">
                  <h5 className="menu-title" id="mainMenuLabel">
                    Menu Utama
                  </h5>
                  <button type="button" className="btn-close" aria-label="Tutup" onClick={closeMenu}></button>
                </div>
                <div className="menu-popup-body">
                  {NAV_LINKS.map((item) => (
                    <Link key={item.href} className="menu-link" href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  ))}

                  <div className="menu-contact">
                    <p>Contact Person</p>
                    <a
                      className="menu-wa-link"
                      href="https://wa.me/6282337224661"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp" aria-hidden="true"></i>
                      <span>Hubungi Kami</span>
                    </a>
                  </div>
                </div>
              </nav>
            </>
          )}
        </div>
      </header>
    </>
  );
}
