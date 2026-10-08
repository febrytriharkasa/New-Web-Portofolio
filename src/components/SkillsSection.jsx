import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const PHPIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#777BB4" d="M64 33.035c-35.373 0-64 14.373-64 32.09 0 17.718 28.627 32.091 64 32.091s64-14.373 64-32.09c0-17.718-28.627-32.091-64-32.091z"/><path fill="#fff" d="M36.15 73.15h5.013l2.386-11.933h6.966c4.605 0 7.717-.942 9.336-2.827 1.619-1.884 2.428-4.518 2.428-7.9 0-1.619-.325-2.944-.976-3.975-.651-1.03-1.558-1.801-2.722-2.313-1.164-.512-2.513-.855-4.048-1.03-1.535-.175-3.182-.262-4.942-.262H38.72L36.15 73.15zm10.625-18.233h3.294c2.24 0 3.832.354 4.777 1.062.945.708 1.418 1.871 1.418 3.489 0 1.619-.531 2.845-1.592 3.678-1.061.834-2.71 1.25-4.947 1.25h-4.36l1.41-9.479zM60.32 73.15h5.014l2.385-11.933h6.967c4.605 0 7.717-.942 9.336-2.827 1.619-1.884 2.428-4.518 2.428-7.9 0-1.619-.325-2.944-.976-3.975-.651-1.03-1.558-1.801-2.722-2.313-1.164-.512-2.513-.855-4.048-1.03-1.535-.175-3.182-.262-4.942-.262H62.89L60.32 73.15zm10.625-18.233h3.294c2.24 0 3.832.354 4.777 1.062.945.708 1.418 1.871 1.418 3.489 0 1.619-.531 2.845-1.592 3.678-1.061.834-2.71 1.25-4.947 1.25h-4.36l1.41-9.479z"/></svg>
)
const LaravelIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#FF2D20" d="M64 0l64 16v80l-64 32L0 96V16z"/><path fill="#fff" d="M40 32h16v48H88v16H40z"/></svg>
)
const CodeIgniterIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#EF4223" d="M64 8c-17.6 0-32 14.4-32 32 0 8.8 3.6 16.8 9.4 22.6l45.2-45.2C80.8 11.6 72.8 8 64 8z"/><path fill="#EF4223" d="M96.6 25.4L51.4 70.6c5.8 5.8 13.8 9.4 22.6 9.4 17.6 0 32-14.4 32-32 0-8.8-3.6-16.8-9.4-22.6z"/><path fill="#DD3806" d="M64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"/></svg>
)
const DartIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#01579B" d="M27.3 27.3L64 64l36.7-36.7L95.3 22H32.7l-5.4 5.3z"/><path fill="#01579B" d="M22 32.7v62.6l5.3 5.3L64 64 27.3 27.3 22 32.7z"/><path fill="#01579B" d="M100.7 27.3L64 64l36.7 36.7 5.3-5.4V32.7l-5.3-5.4z"/><path fill="#01579B" d="M27.3 100.7l5.4 5.3h62.6l5.4-5.3L64 64 27.3 100.7z"/></svg>
)
const JavaScriptIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#F7DF1E" d="M2 2h124v124H2z"/><path fill="#000" d="M81.4 96.8c2.6 4.3 6.1 7.4 12.1 7.4 5.1 0 8.3-2.5 8.3-6 0-4.2-3.3-5.7-8.9-8.1l-3.1-1.3c-8.8-3.8-14.7-8.5-14.7-18.5 0-9.2 7-16.2 18-16.2 7.8 0 13.4 2.7 17.4 9.8l-9.5 6.1c-2.1-3.7-4.3-5.2-7.9-5.2-3.6 0-5.9 2.3-5.9 5.2 0 3.7 2.3 5.2 7.5 7.4l3.1 1.3c10.4 4.5 16.3 9.1 16.3 19.4 0 11.1-8.7 17.2-20.4 17.2-11.5 0-18.9-5.5-22.5-12.6l9.2-6zm-43.8 1.1c1.9 3.4 3.7 6.3 7.9 6.3 4 0 6.6-1.6 6.6-7.7V54.9h12.3v42c0 12.7-7.5 18.5-18.4 18.5-9.9 0-15.6-5.1-18.5-11.2l9.3-5.6z"/></svg>
)
const ReactIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><circle cx="64" cy="64" r="11.4" fill="#61DAFB"/><path fill="#61DAFB" d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></svg>
)
const VueIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#42B883" d="M78.8 10L64 35.4 49.2 10H0l64 110 64-110z"/><path fill="#35495E" d="M78.8 10L64 35.4 49.2 10H25.6L64 76 102.4 10z"/></svg>
)
const TailwindIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#38BDF8" d="M64 24c-7 0-13 3-17 8 5-2 9-1 13 1 4 2 6 6 8 11 2-5 5-9 10-11 4-2 8-3 13-1-4-5-10-8-17-8-6 0-10 2-10 2s-4-2-10-2zm-24 24c-7 0-13 3-17 8 5-2 9-1 13 1 4 2 6 6 8 11 2-5 5-9 10-11 4-2 8-3 13-1-4-5-10-8-17-8-6 0-10 2-10 2s-4-2-10-2zm48 0c-7 0-13 3-17 8 5-2 9-1 13 1 4 2 6 6 8 11 2-5 5-9 10-11 4-2 8-3 13-1-4-5-10-8-17-8-6 0-10 2-10 2s-4-2-10-2zM40 72c-7 0-13 3-17 8 5-2 9-1 13 1 4 2 6 6 8 11 2-5 5-9 10-11 4-2 8-3 13-1-4-5-10-8-17-8-6 0-10 2-10 2s-4-2-10-2z"/></svg>
)
const BootstrapIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#7952B3" d="M9.53 32.36c-.17-4.73 3.63-9.14 8.58-9.14h91.78c4.95 0 8.75 4.41 8.58 9.14-.16 4.53.05 10.38 1.59 15.14 1.55 4.77 4.15 7.78 8.41 8.17v4.4c-4.26.39-6.86 3.4-8.41 8.17-1.54 4.76-1.75 10.61-1.59 15.14.17 4.73-3.63 9.14-8.58 9.14H18.11c-4.95 0-8.75-4.41-8.58-9.14.16-4.53-.05-10.38-1.59-15.14-1.55-4.77-4.15-7.78-8.41-8.17v-4.4c4.26-.39 6.86-3.4 8.41-8.17 1.54-4.76 1.75-10.61 1.59-15.14z"/><path fill="#fff" d="M68.97 90.21c8.01 0 12.91-3.92 12.91-10.38 0-4.87-3.43-8.39-8.53-8.93v-.2c4.02-.58 7.05-3.95 7.05-8.09 0-5.61-4.43-9.32-11.38-9.32H47.21v37.92h21.76zm-14.6-31.36h10.56c4.53 0 7.05 1.95 7.05 5.48 0 3.83-2.93 5.8-8.21 5.8H54.37V58.85zm0 24.39V70.87h11.85c5.73 0 8.68 2.04 8.68 6.13 0 4.09-2.88 6.24-8.33 6.24H54.37z"/></svg>
)
const MySQLIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#00618A" d="M116.9 98.3c-4.9-1.6-9.7-3-14.4-4.5-1.1-.4-1.7-.2-2.4.7-6.3 8-14.4 11.9-24.5 10.7-6.2-.7-11.6-3.5-16-8-6.5-6.7-9.6-15-10.2-24.2-.4-6.2.4-12.2 2.6-18 3.3-8.5 8.8-15.1 16.7-19.5 9.3-5.2 19.2-5.9 29.2-2.1 4.7 1.8 8.5 4.9 11.6 8.9.6.7 1.1 1.4 1.8 2.3 1.9-1.5 3.8-2.9 5.6-4.4 3.5-2.8 7-5.6 10.5-8.4.5-.4.6-.8.2-1.4C120.8 9.7 108.8 2.5 93.4.6 78.8-1.2 65.3 2.5 53.5 12c-10.1 8.2-16.4 18.8-19.3 31.4-2.5 10.9-2.2 21.7 1.3 32.3 4.9 14.9 14.3 26 28.5 32.6 14.3 6.7 29.1 7.3 44 1.9 9.9-3.6 17.8-9.7 23.3-18.7.4-.6.4-1-.2-1.4-4.7-3.6-9.5-7.2-14.2-10.8zM64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"/></svg>
)
const PostgreSQLIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#336791" d="M93.8 18.5c-4.7-1.3-9.8-1.4-14.6-.3-3.4.8-6.6 2.2-9.5 4.1-1.6 1.1-3.1 2.3-4.4 3.7-1.4 1.5-2.6 3.1-3.6 4.9-.7 1.2-1.3 2.4-1.8 3.7-.6 1.5-1.1 3.1-1.4 4.7-.4 2.1-.6 4.3-.5 6.5.1 2.1.4 4.1 1 6.1.6 2 1.5 3.9 2.5 5.6 1.3 2.2 2.9 4.1 4.8 5.8 1.7 1.5 3.6 2.8 5.6 3.8 2.2 1.1 4.5 1.9 6.9 2.4 2.3.5 4.7.7 7 .6 2.5-.1 5-.5 7.4-1.2 2.5-.7 4.8-1.8 7-3.2 2.1-1.3 4-2.9 5.7-4.7 1.5-1.6 2.8-3.3 3.9-5.2.9-1.6 1.7-3.3 2.3-5 .5-1.5.9-3.1 1.1-4.7.3-2.2.3-4.5 0-6.7-.3-2-.8-4-1.5-5.9-.8-2-1.8-3.9-3-5.6-1.4-2-3-3.8-4.9-5.3-1.6-1.3-3.3-2.4-5.2-3.3-1.6-.8-3.3-1.4-5-1.9zm-63.6 0c-2.3.6-4.5 1.5-6.6 2.7-2.1 1.2-4 2.7-5.7 4.4-1.7 1.7-3.2 3.6-4.4 5.7-1.2 2.1-2.1 4.3-2.7 6.6-.6 2.4-1 4.9-1 7.4 0 2.5.3 5 1 7.4.6 2.3 1.5 4.5 2.7 6.6 1.2 2.1 2.7 4 4.4 5.7 1.7 1.7 3.6 3.2 5.7 4.4 2.1 1.2 4.3 2.1 6.6 2.7 2.4.6 4.9 1 7.4 1 2.5 0 5-.3 7.4-1 2.3-.6 4.5-1.5 6.6-2.7 2.1-1.2 4-2.7 5.7-4.4 1.7-1.7 3.2-3.6 4.4-5.7 1.2-2.1 2.1-4.3 2.7-6.6.6-2.4 1-4.9 1-7.4 0-2.5-.3-5-1-7.4-.6-2.3-1.5-4.5-2.7-6.6-1.2-2.1-2.7-4-4.4-5.7-1.7-1.7-3.6-3.2-5.7-4.4-2.1-1.2-4.3-2.1-6.6-2.7-2.4-.6-4.9-1-7.4-1-2.5 0-5 .3-7.4 1z"/></svg>
)
const GitIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#F05032" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.994c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.867-2.869-3.572-7.078-2.119-10.606L67.39 47.58v33.908c.908.447 1.764 1.042 2.522 1.799 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.924-.922 1.991-1.618 3.138-2.085V47.14c-1.147-.467-2.213-1.162-3.138-2.089-2.873-2.871-3.573-7.094-2.1-10.627L39.662 19.972 3.258 56.377c-3.174 3.176-3.174 8.327 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.868-54.868c3.174-3.176 3.174-8.327 0-11.501z"/></svg>
)
const GitHubIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#181616" d="M64 5.1c-33.3 0-60.4 27-60.4 60.4 0 26.7 17.3 49.3 41.3 57.3 3 .6 4.1-1.3 4.1-2.9 0-1.4-.1-6.2-.1-11.2-16.8 3.7-20.3-7.2-20.3-7.2-2.7-7-6.7-8.8-6.7-8.8-5.5-3.7.4-3.7.4-3.7 6.1.4 9.3 6.2 9.3 6.2 5.4 9.2 14.1 6.6 17.6 5 .5-3.9 2.1-6.6 3.8-8.1-13.4-1.5-27.5-6.7-27.5-29.8 0-6.6 2.4-12 6.2-16.2-.6-1.5-2.7-7.7.6-16 0 0 5.1-1.6 16.6 6.2 4.8-1.3 10-2 15.1-2s10.3.7 15.1 2c11.5-7.8 16.6-6.2 16.6-6.2 3.3 8.3 1.2 14.5.6 16 3.9 4.2 6.2 9.6 6.2 16.2 0 23.2-14.1 28.3-27.6 29.8 2.2 1.9 4.1 5.5 4.1 11.2 0 8.1-.1 14.6-.1 16.6 0 1.6 1.1 3.5 4.1 2.9 24-8 41.3-30.6 41.3-57.3 0-33.4-27-60.4-60.4-60.4z"/><path fill="#fff" d="M26.5 90.3c-.1.3-.6.4-1 .2s-.7-.6-.5-.9c.1-.3.6-.4 1-.2s.7.6.5.9zm2.4 2.7c-.3.3-.9.1-1.2-.3-.4-.4-.5-1-.2-1.2.3-.3.9-.1 1.2.3.4.4.5.9.2 1.2zm2.4 3.6c-.4.3-1 0-1.3-.5-.4-.5-.4-1.1 0-1.4.4-.3 1 0 1.3.5.4.6.4 1.2 0 1.4zm3.3 3.3c-.3.4-1 .3-1.5-.2-.5-.5-.7-1.2-.3-1.5.3-.4 1-.3 1.5.2.5.5.6 1.1.3 1.5zm4.5 2c-.2.5-.9.7-1.5.4-.7-.2-1.1-.8-.9-1.3.2-.5.9-.7 1.5-.4.7.2 1.1.8.9 1.3zm5 1.5c0 .5-.6.9-1.3.9-.7 0-1.3-.4-1.3-.9s.6-.9 1.3-.9c.7 0 1.3.4 1.3.9zm4.7-.8c.1.5-.4 1.1-1.1 1.2-.7.1-1.3-.2-1.4-.7-.1-.5.4-1.1 1.1-1.2.7-.1 1.3.2 1.4.7z"/></svg>
)
const PostmanIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#FF6C37" d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"/></svg>
)
const VSCodeIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#0078D4" d="M3.5 36.5L95 4.3l18.5 9.3v100.9L95 123.7 3.5 91.5z"/><path fill="#fff" d="M95 4.3l18.5 9.3v100.9L95 123.7V4.3z" opacity=".25"/><path fill="#fff" d="M95 4.3L3.5 36.5v55L95 123.7V4.3z" opacity=".1"/><path fill="#0078D4" d="M52.5 90.5L3.5 91.5V36.5l49 1z"/><path fill="#fff" d="M95 4.3l-42.5 86.2L95 123.7V4.3z" opacity=".2"/></svg>
)
const VercelIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#000" d="M64 2.5L2.5 120.5h123z"/></svg>
)
const NetlifyIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#00C7B7" d="M64 2.5L2.5 120.5h123z"/><path fill="#fff" d="M64 2.5L2.5 120.5h123z" opacity=".2"/></svg>
)
const ViteIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#41B883" d="M64 2.5L2.5 120.5h123z"/><path fill="#34495E" d="M64 2.5L2.5 120.5h123z" opacity=".2"/></svg>
)

export default function SkillsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const [log, setLog] = useState('> [System] Klik salah satu kartu di atas untuk melihat detail alur kerja.')

  const skillCategories = [
    {
      category: 'Bahasa Pemrograman',
      items: [
        { label: 'PHP', bg: 'hover:bg-primary-fixed', icon: <PHPIcon /> },
        { label: 'JavaScript', bg: 'hover:bg-secondary-fixed', icon: <JavaScriptIcon /> },
        { label: 'Dart', bg: 'hover:bg-tertiary-fixed', icon: <DartIcon /> },
      ],
    },
    {
      category: 'Framework & Library',
      items: [
        { label: 'Laravel', bg: 'hover:bg-primary-fixed', icon: <LaravelIcon /> },
        { label: 'CodeIgniter', bg: 'hover:bg-primary-container', icon: <CodeIgniterIcon /> },
        { label: 'React.js', bg: 'hover:bg-tertiary-fixed', icon: <ReactIcon /> },
        { label: 'Tailwind CSS', bg: 'hover:bg-secondary-container', icon: <TailwindIcon /> },
        { label: 'Bootstrap', bg: 'hover:bg-primary-fixed-dim', icon: <BootstrapIcon /> },
      ],
    },
    {
      category: 'Database & Tools',
      items: [
        { label: 'MySQL', bg: 'hover:bg-tertiary-fixed-dim', icon: <MySQLIcon /> },
        { label: 'PostgreSQL', bg: 'hover:bg-tertiary-fixed', icon: <PostgreSQLIcon /> },
        { label: 'Git', bg: 'hover:bg-primary-container', icon: <GitIcon /> },
        { label: 'GitHub', bg: 'hover:bg-surface-bright', icon: <GitHubIcon /> },
        { label: 'Postman', bg: 'hover:bg-secondary-fixed', icon: <PostmanIcon /> },
        { label: 'VS Code', bg: 'hover:bg-primary-fixed', icon: <VSCodeIcon /> },
        { label: 'Vite', bg: 'hover:bg-tertiary-container', icon: <ViteIcon /> },
        { label: 'Vercel', bg: 'hover:bg-surface-bright', icon: <VercelIcon /> },
      ],
    },
  ]

  return (
    <motion.section
      ref={ref}
      className="w-full bg-surface-container py-space-xl lg:py-space-2xl border-t-[2.5px] border-on-surface overflow-hidden"
      id="sandbox"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <motion.div
            className="lg:col-span-6 flex flex-col gap-space-md"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.45 }}
            >
              TEKNOLOGI &amp; KEAHLIAN UTAMA
            </motion.h2>
            <motion.p
              className="font-body-md text-body-md text-on-surface-variant"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.36, duration: 0.45 }}
            >
              Tumpukan teknologi yang saya gunakan dengan fokus 
              utama membangun logika server dan arsitektur basis data yang andal, 
              didukung oleh alat front-end modern untuk integrasi antarmuka yang utuh.
            </motion.p>
            <motion.div
              className="flex flex-col gap-space-sm pt-space-xs"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.07, delayChildren: 0.44 }}
            >
              {skillCategories.map((group) => (
                <div key={group.category} className="flex flex-col gap-1.5">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-space-xs">
                    {group.items.map((s) => (
                      <motion.span
                        key={s.label}
                        className={`inline-flex items-center gap-1.5 px-space-sm py-space-2xs rounded-full border-2 border-on-surface bg-surface-bright text-on-surface font-label-md text-label-md uppercase shadow-[3px_3px_0px_#191b23] transition-colors cursor-pointer font-bold ${s.bg}`}
                        variants={{ initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 } }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4, scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        {s.icon}
                        {s.label}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
  
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            style={{ y }}
            initial={{ opacity: 0, x: 36, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.22, type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="bg-surface-container-lowest border-[2.5px] border-on-surface rounded-2xl p-space-md shadow-[6px_6px_0px_#191b23] flex flex-col gap-space-sm">
              <div className="flex items-center justify-between border-b-2 border-on-surface pb-space-2xs">
                <span className="font-label-md text-label-md text-on-surface uppercase font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-secondary-container">science</span> DEVELOPMENT WORKFLOW
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Tekan Tombol</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Siklus pengembangan aplikasi yang saya terapkan, mulai dari perancangan basis data, pemrosesan logika server, integrasi antarmuka, hingga proses rilis.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
                <motion.div
                  onClick={() => setLog('> [Front-End] Rendering komponen UI responsif dengan React & Tailwind CSS.')}
                  className="min-h-32 bg-secondary-container rounded-xl border-2 border-on-surface shadow-[4px_4px_0px_#191b23] p-2 flex flex-col items-center justify-center text-center cursor-pointer select-none"
                  whileHover={{ y: -8, rotate: -1 }}
                  whileTap={{ scaleX: 1.25, scaleY: 0.75 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                >
                  <span className="material-symbols-outlined text-3xl text-on-secondary-container">laptop_mac</span>
                  <span className="font-label-sm text-label-sm text-on-secondary-container uppercase font-bold mt-1">Front-End</span>
                  <span className="font-mono text-[9px] text-on-secondary-container/80">React / Vite / Tailwind</span>
                </motion.div>
                <motion.div
                  onClick={() => setLog('> [Back-End] Menghubungkan database MySQL & RESTful API melalui Laravel.')}
                  className="min-h-32 bg-tertiary-fixed rounded-xl border-2 border-on-surface shadow-[4px_4px_0px_#191b23] p-2 flex flex-col items-center justify-center text-center cursor-pointer select-none"
                  whileHover={{ rotate: 6 }}
                  whileTap={{ rotate: -12, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 12 }}
                >
                  <span className="material-symbols-outlined text-3xl text-on-tertiary-fixed">developer_board</span>
                  <span className="font-label-sm text-label-sm text-on-tertiary-fixed uppercase font-bold mt-1">Back-End</span>
                  <span className="font-mono text-[9px] text-on-tertiary-fixed/80">Laravel / CI / MySQL API</span>
                </motion.div>
                <motion.div
                  onClick={() => setLog('> [Debug] Pengujian API dengan Postman serta pemecahan masalah kode via Browser DevTools.')}
                  className="min-h-32 bg-primary-container rounded-xl border-2 border-on-surface shadow-[4px_4px_0px_#191b23] p-2 flex flex-col items-center justify-center text-center cursor-pointer select-none"
                  whileHover={{ boxShadow: '6px 6px 0px #191b23' }}
                  whileTap={{ x: 4, y: 4, boxShadow: '0px 0px 0px #191b23' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  <span className="material-symbols-outlined text-3xl text-on-primary">bug_report</span>
                  <span className="font-label-sm text-label-sm text-on-primary uppercase font-bold mt-1">DEBUG & TESTING</span>
                  <span className="font-mono text-[9px] text-on-primary/80">Postman / DevTools</span>
                </motion.div>
                <motion.div
                  onClick={() => setLog('> [Deployment] Otomatisasi build & deployment aplikasi ke platform deploy.')}
                  className="min-h-32 bg-tertiary-container rounded-xl border-2 border-on-surface shadow-[4px_4px_0px_#191b23] p-2 flex flex-col items-center justify-center text-center cursor-pointer select-none"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  whileTap={{ x: 10, y: 7 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="material-symbols-outlined text-3xl text-on-primary">cloud_upload</span>
                  <span className="font-label-sm text-label-sm text-on-primary uppercase font-bold mt-1">Deployment</span>
                  <span className="font-mono text-[9px] text-on-primary/80">Vercel / Git Workflow / Netlify</span>
                </motion.div>
              </div>
              <motion.div
                key={log}
                className="mt-space-xs p-space-2xs bg-surface-container rounded-lg border border-on-surface font-mono text-[11px] text-on-surface-variant flex items-center justify-between"
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
              >
                <span>{log}</span>
                <motion.span
                  className="w-2 h-2 rounded-full bg-tertiary-fixed-dim inline-block"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>

            <motion.div
              className="mt-space-sm border-2 border-on-surface rounded-xl bg-surface-container-lowest p-space-sm shadow-[4px_4px_0px_#191b23]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.72, duration: 0.4 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs font-label-sm text-label-sm">
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✔</span> Pengelolaan Basis Data Teroptimasi</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✔</span> Integrasi RESTful API</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✔</span> Kode Terstruktur &amp; Mudah Dipelihara</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✔</span> Integrasi Antarmuka Web Modern</div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
