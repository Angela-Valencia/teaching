const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(":memory:");

const initializeDatabase = () => {
  const translations = {
    en: {
      "Studio Musik Angela": "Angela's Music Studio",
      "Kursus": "Courses",
      "Kursus Biola": "Violin Courses",
      "Pemula": "Beginner",
      "priceBeginnerViolin": "€35/hour",
      "Hubungi Saya": "Contact Me",
      "Angela Valencia": "Angela Valencia"
    },
    id: {
      "Studio Musik Angela": "Studio Musik Angela",
      "Kursus": "Kursus",
      "Kursus Biola": "Program Biola",
      "Pemula": "Pemula",
      "priceBeginnerViolin": "Rp. 450,000/jam",
      "Hubungi Saya": "Hubungi Saya",
      "Angela Valencia": "Angela Valencia"
    },
    zh: {
      "Studio Musik Angela": "陈小仙音乐工作室",
      "Kursus": "课程设置",
      "Kursus Biola": "小提琴课程",
      "Pemula": "初级",
      "priceBeginnerViolin": "¥300/小时",
      "Hubungi Saya": "联系我",
      "Angela Valencia": "陈小仙"
    }
  };

  return translations;
};

module.exports = { initializeDatabase };
