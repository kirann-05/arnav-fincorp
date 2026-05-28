import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef(null);

  useEffect(() => { themeRef.current = theme; }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.offsetWidth, h = canvas.offsetHeight;
    canvas.width = w; canvas.height = h;
    const count = Math.min(40, Math.floor((w * h) / 30000));
    const connDist = 150, mouseR = 200;
    const pts = [];
    for (let i = 0; i < count; i++) {
      pts.push({ x: Math.random()*w, y: Math.random()*h, vx: (Math.random()-0.5)*0.6, vy: (Math.random()-0.5)*0.6, r: Math.random()*2+1, br: 0 });
      pts[i].br = pts[i].r;
    }
    function animate() {
      ctx.clearRect(0,0,w,h);
      const dk = themeRef.current === 'dark';
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x<0||p.x>w) p.vx*=-1;
        if (p.y<0||p.y>h) p.vy*=-1;
        const dx=p.x-mouseRef.current.x, dy=p.y-mouseRef.current.y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<mouseR){const f=(mouseR-d)/mouseR;p.x+=dx/d*f*2;p.y+=dy/d*f*2;p.r=p.br+f*2;}
        else{p.r+=(p.br-p.r)*0.1;}
        const c=dk?'rgba(255,165,50,':'rgba(200,120,20,';
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=c+'0.05)';ctx.fill();
        ctx.beginPath();ctx.arc(p.x,p.y,p.r*3,0,Math.PI*2);ctx.fillStyle=c+'0.01)';ctx.fill();
      });
      for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<connDist){const o=(1-d/connDist)*(dk?0.08:0.05);
        ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle=dk?`rgba(255,140,0,${o})`:`rgba(200,120,20,${o})`;ctx.lineWidth=0.5;ctx.stroke();}
      }
      animRef.current = requestAnimationFrame(animate);
    }
    animate();
    const onResize=()=>{w=canvas.offsetWidth;h=canvas.offsetHeight;canvas.width=w;canvas.height=h;};
    const onMove=(e)=>{const r=canvas.getBoundingClientRect();mouseRef.current={x:e.clientX-r.left,y:e.clientY-r.top};};
    const onLeave=()=>{mouseRef.current={x:-1000,y:-1000};};
    window.addEventListener('resize',onResize);
    canvas.addEventListener('mousemove',onMove);
    canvas.addEventListener('mouseleave',onLeave);
    return()=>{cancelAnimationFrame(animRef.current);window.removeEventListener('resize',onResize);
      canvas.removeEventListener('mousemove',onMove);canvas.removeEventListener('mouseleave',onLeave);};
  }, []);

  return <canvas ref={canvasRef} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',pointerEvents:'auto',zIndex:0}} />;
};

export default ParticleCanvas;
