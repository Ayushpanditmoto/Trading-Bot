"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { MenuIcon, XIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { NAV_ITEMS, LOGIN_LINK, CTA_LINK, BRAND_NAME } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Bar $scrolled={scrolled}>
        <Container>
          <Inner>
            <Logo href="#" />

            <Nav>
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.label} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </Nav>

            <Actions>
              <LoginLink href={LOGIN_LINK}>Login</LoginLink>
              <Button href={CTA_LINK}>
                Get Started <ArrowRightIcon size={16} />
              </Button>
              <Burger onClick={() => setOpen(true)} aria-label="Open menu">
                <MenuIcon size={22} />
              </Burger>
            </Actions>
          </Inner>
        </Container>
      </Bar>

      {open && (
        <MobileMenu>
          <MobileHeader>
            <Logo href="#" />
            <CloseBtn onClick={() => setOpen(false)} aria-label="Close menu">
              <XIcon size={22} />
            </CloseBtn>
          </MobileHeader>
          <MobileNav>
            {NAV_ITEMS.map((item) => (
              <MobileLink key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
                <span>→</span>
              </MobileLink>
            ))}
          </MobileNav>
          <MobileActions>
            <Button href={CTA_LINK} size="lg" style={{ width: "100%" }}>
              Get Started <ArrowRightIcon size={16} />
            </Button>
            <MobileLogin href={LOGIN_LINK}>Login to {BRAND_NAME}</MobileLogin>
          </MobileActions>
        </MobileMenu>
      )}
    </>
  );
}

const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 14px 0;
  transition: background 0.3s ease, border-color 0.3s ease, padding 0.3s ease;
  background: ${({ $scrolled }) => ($scrolled ? "rgba(5,5,7,0.72)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(16px)" : "none")};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.border : "transparent"};
  padding: ${({ $scrolled }) => ($scrolled ? "10px 0" : "18px 0")};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  padding: 9px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: rgba(255, 255, 255, 0.05);
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & > a:not(:last-child) {
      display: none;
    }
  }
`;

const LoginLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: grid;
    place-items: center;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(5, 5, 7, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  padding: 20px 24px 32px;
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseBtn = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const MobileLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 4px;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const MobileActions = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MobileLogin = styled.a`
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
