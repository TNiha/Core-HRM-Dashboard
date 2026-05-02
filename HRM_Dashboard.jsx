import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

const NAV = [
  { icon: "⊞", label: "Dashboard", active: true },
  { icon: "👥", label: "Employees" },
  { icon: "🏢", label: "All Departments" },
  { icon: "⏱", label: "Attendance" },
  { icon: "💳", label: "Payroll" },
  { icon: "💼", label: "Jobs" },
  { icon: "🔍", label: "Candidates" },
  { icon: "📅", label: "Leaves" },
  { icon: "🎉", label: "Holidays" },
  { icon: "⚙️", label: "Settings" },
];

const STATS = [
  { label: "Total Employees", value: "560", change: "+10%", positive: true, date: "December 02, 2025", color: "#4361ee" },
  { label: "Total Applicant", value: "1,050", change: "+12%", positive: true, date: "December 06, 2025", color: "#e63946" },
  { label: "Total Attendance", value: "470", change: "-4%", positive: false, date: "December 04, 2025", color: "#e63946" },
  { label: "Total Projects", value: "250", change: "+6%", positive: true, date: "December 05, 2025", color: "#f5a623" },
];

const ATTENDANCE = [
  { day: "MON", total: 100, present: 60, late: 20, absent: 20 },
  { day: "TUE", total: 100, present: 45, late: 15, absent: 40 },
  { day: "WED", total: 100, present: 50, late: 25, absent: 25 },
  { day: "THU", total: 100, present: 65, late: 15, absent: 20 },
  { day: "FRI", total: 100, present: 55, late: 10, absent: 35 },
  { day: "SAT", total: 100, present: 60, late: 15, absent: 25 },
  { day: "SUN", total: 100, present: 58, late: 12, absent: 30 },
];

const PROJECT_DATA = [
  { name: "Completed", value: 45, color: "#4361ee" },
  { name: "In Progress", value: 30, color: "#f5a623" },
  { name: "On Hold", value: 25, color: "#d0d0d0" },
];

const CALENDAR_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const WEEKS = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, null, null, null, null],
];

export default function HRMDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div style={{
      display: "flex", minHeight: "100vh", background: "#1e2a4a",
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    }}>
      {/* Sidebar */}
      <aside style={{
        width: 220, background: "#1e2a4a", display: "flex",
        flexDirection: "column", padding: "24px 0", flexShrink: 0
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 24px 32px" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: "#4361ee",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18
          }}>⚙</div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 18, letterSpacing: 0.3 }}>Core HRM</span>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, padding: "0 12px" }}>
          {NAV.map(({ icon, label }) => {
            const isActive = activeNav === label;
            return (
              <button key={label} onClick={() => setActiveNav(label)} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 14px", borderRadius: 10, border: "none",
                cursor: "pointer", width: "100%", textAlign: "left",
                background: isActive ? "rgba(67,97,238,0.18)" : "transparent",
                color: isActive ? "#4361ee" : "rgba(255,255,255,0.65)",
                fontWeight: isActive ? 600 : 400, fontSize: 14,
                transition: "all 0.15s"
              }}>
                <span style={{ fontSize: 16, width: 20, textAlign: "center" }}>{icon}</span>
                {label}
              </button>
            );
          })}
        </nav>

        {/* Help */}
        <div style={{ padding: "0 12px" }}>
          <button style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 14px", borderRadius: 10, border: "none",
            cursor: "pointer", width: "100%", textAlign: "left",
            background: "transparent", color: "rgba(255,255,255,0.65)", fontSize: 14
          }}>
            <span style={{ fontSize: 16 }}>📞</span> Help Center
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{
        flex: 1, background: "#f4f6fb", borderRadius: "20px 0 0 20px",
        overflow: "hidden", display: "flex", flexDirection: "column"
      }}>
        {/* Header */}
        <header style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "24px 32px 0", background: "#fff",
          borderBottom: "1px solid #eaecf4"
        }}>
          <div style={{ paddingBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "#1a1d2e" }}>
                Hello, Mira Taj
              </h1>
              <span style={{ fontSize: 22 }}>👋</span>
            </div>
            <p style={{ margin: "4px 0 0", color: "#8a90a4", fontSize: 13 }}>Good Morning</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingBottom: 20 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#f4f6fb", borderRadius: 24, padding: "8px 16px",
              border: "1px solid #e0e4f0", width: 220
            }}>
              <span style={{ color: "#8a90a4", fontSize: 14 }}>🔍</span>
              <input placeholder="Search..." style={{
                border: "none", background: "transparent", outline: "none",
                fontSize: 13, color: "#1a1d2e", width: "100%"
              }} />
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "#f4f6fb", border: "1px solid #e0e4f0",
              borderRadius: 24, padding: "7px 16px", cursor: "pointer"
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "#4361ee", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700
              }}>MT</div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1d2e" }}>Mira Taj</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div style={{ padding: "28px 32px", flex: 1, overflowY: "auto", background: "#f4f6fb" }}>
          {/* Top row: Stats + Calendar */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 320px", gap: 16, marginBottom: 20 }}>
            {/* Stat Cards */}
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 16, padding: "20px 22px",
                border: "1px solid #eaecf4", boxShadow: "0 2px 8px rgba(30,42,74,0.05)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: i === 0 ? "#eef0fd" : i === 3 ? "#fff8ec" : "#feecee",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
                  }}>
                    {i === 0 ? "👥" : i === 1 ? "👤" : i === 2 ? "⏱" : "📊"}
                  </div>
                  <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>{s.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 28, fontWeight: 700, color: "#1a1d2e" }}>{s.value}</span>
                  <span style={{
                    fontSize: 13, fontWeight: 600,
                    color: s.positive ? "#16a34a" : "#dc2626",
                    background: s.positive ? "#f0fdf4" : "#fef2f2",
                    padding: "3px 8px", borderRadius: 20
                  }}>{s.change}</span>
                </div>
                <p style={{ margin: "10px 0 0", fontSize: 12, color: s.positive ? "#f5a623" : "#dc2626" }}>
                  Update: {s.date}
                </p>
              </div>
            ))}

            {/* Calendar */}
            <div style={{
              background: "#fff", borderRadius: 16, padding: "20px",
              border: "1px solid #eaecf4", boxShadow: "0 2px 8px rgba(30,42,74,0.05)",
              gridRow: "1 / 3"
            }}>
              <p style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 600, color: "#8a90a4", textTransform: "uppercase", letterSpacing: 0.5 }}>My Schedule</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <button style={{ background: "none", border: "none", cursor: "pointer", color: "#4361ee", fontSize: 16 }}>‹</button>
                <div style={{ display: "flex", gap: 8 }}>
                  <select style={{
                    border: "1px solid #e0e4f0", borderRadius: 8, padding: "4px 8px",
                    fontSize: 13, color: "#1a1d2e", background: "#f9fafb"
                  }}>
                    <option>December</option>
                  </select>
                  <select style={{
                    border: "1px solid #e0e4f0", borderRadius: 8, padding: "4px 8px",
                    fontSize: 13, color: "#1a1d2e", background: "#f9fafb"
                  }}>
                    <option>2025</option>
                  </select>
                </div>
                <button style={{ background: "none", border: "none", cursor: "pointer", color: "#4361ee", fontSize: 16 }}>›</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
                {CALENDAR_DAYS.map(d => (
                  <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 600, color: "#8a90a4", padding: "4px 0" }}>{d}</div>
                ))}
                {WEEKS.flat().map((day, idx) => (
                  <div key={idx} style={{
                    textAlign: "center", fontSize: 12, padding: "6px 0",
                    borderRadius: 8, cursor: day ? "pointer" : "default",
                    background: day === 5 ? "#4361ee" : day === 6 ? "#e63946" : "transparent",
                    color: day === 5 || day === 6 ? "#fff" : day ? "#1a1d2e" : "transparent",
                    fontWeight: day === 5 || day === 6 ? 700 : 400,
                    transition: "background 0.12s"
                  }}>{day || ""}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 16 }}>
            {/* Attendance Bar Chart */}
            <div style={{
              background: "#fff", borderRadius: 16, padding: "22px",
              border: "1px solid #eaecf4", boxShadow: "0 2px 8px rgba(30,42,74,0.05)"
            }}>
              <h2 style={{ margin: "0 0 18px", fontSize: 15, fontWeight: 700, color: "#1a1d2e" }}>
                Attendance Overview
              </h2>
              <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                {[["#4361ee", "Total Employee"], ["#f5a623", "Absent"], ["#9ca3af", "Late"], ["#f97316", "Present"]].map(([c, l]) => (
                  <span key={l} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#6b7280" }}>
                    <span style={{ width: 10, height: 10, borderRadius: 2, background: c, display: "inline-block" }} />
                    {l}
                  </span>
                ))}
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={ATTENDANCE} barSize={11} barGap={2}>
                  <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#8a90a4" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#8a90a4" }} axisLine={false} tickLine={false} domain={[0, 150]} />
                  <Tooltip
                    contentStyle={{ borderRadius: 10, border: "1px solid #eaecf4", fontSize: 12 }}
                    cursor={{ fill: "#f4f6fb" }}
                  />
                  <Bar dataKey="total" name="Total Employee" fill="#4361ee" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="present" name="Present" fill="#f97316" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="late" name="Late" fill="#9ca3af" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="absent" name="Absent" fill="#f5a623" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Project Donut */}
            <div style={{
              background: "#fff", borderRadius: 16, padding: "22px",
              border: "1px solid #eaecf4", boxShadow: "0 2px 8px rgba(30,42,74,0.05)"
            }}>
              <h2 style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 700, color: "#1a1d2e" }}>
                Project Overview
              </h2>
              <p style={{ margin: "0 0 8px", fontSize: 12, color: "#8a90a4" }}>Total Projects: 250</p>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={PROJECT_DATA} cx="50%" cy="50%"
                    innerRadius={52} outerRadius={80}
                    dataKey="value" stroke="none"
                  >
                    {PROJECT_DATA.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: 10, border: "1px solid #eaecf4", fontSize: 12 }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                {PROJECT_DATA.map(({ name, value, color }) => (
                  <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, display: "inline-block" }} />
                      <span style={{ fontSize: 12, color: "#6b7280" }}>{name}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 80, height: 5, borderRadius: 10, background: "#f0f1f5" }}>
                        <div style={{ width: `${value}%`, height: "100%", borderRadius: 10, background: color }} />
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1d2e", minWidth: 28, textAlign: "right" }}>{value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
