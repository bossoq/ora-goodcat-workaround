<div class="w-full grid grid-cols-6 gap-2 p-2 text-md sm:text-xl text-black dark:text-white">
  <div class="underline col-span-2 sm:col-auto">สิ่งที่ต้องมี</div>
  <div class="col-span-4 sm:col-span-5">
    USB Drive ขนาด 256MB ขึ้นไป (Format FAT32 หรือ NTFS ก็ได้)
  </div>
  <div class="underline col-span-2 sm:col-auto">ขั้นตอนการทำ</div>
  <div class="col-span-4 sm:col-span-5">
    1. เสียบ <span class="font-bold">USB Drive</span> เข้าที่ช่อง USB หน้ารถ (1 หรือ 2 ก็ได้)
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    2. กดปุ่ม <span class="font-bold">สลับแอป [a]</span> บนหน้าจอ แล้วเลือก
    <span class="font-bold">การตั้งค่าระบบ (Settings) [b]</span>
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    <img src="/goodcatusbjson/01.jpg" alt="ขั้นตอนที่ 2" />
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    3. กดปุ่ม <span class="font-bold">ระบบ (System) [a]</span> แล้วเลือก
    <span class="font-bold">หมายเลขเวอร์ชัน (Version) [b]</span>
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    <img src="/goodcatusbjson/02.jpg" alt="ขั้นตอนที่ 3" />
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    4. กดบริเวณคำว่า <span class="font-bold">อัปเดตระบบ (System Update) [a]</span> ประมาณ 8 ครั้ง
    (ถ้ากดถูกตำแหน่งจะได้ยินเสียงจากหน้าจอเหมือนเวลากดเมนูอื่นๆ) จนขึ้นเมนู
    <span class="font-bold">อัปเกรดระบบรถผ่าน USB (Upgrade The Vehicle Via USB)</span>
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    <img src="/goodcatusbjson/03.jpg" alt="ขั้นตอนที่ 4" />
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    5. กดปุ่ม <span class="font-bold">กำลังตรวจสอบการอัปเดต (USB Update) [a]</span>
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    <img src="/goodcatusbjson/04.jpg" alt="ขั้นตอนที่ 5.1" />
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    <img src="/goodcatusbjson/05.jpg" alt="ขั้นตอนที่ 5.2" />
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    6. เมื่อระบบเขียนไฟล์เสร็จสิ้นจะขึ้นหน้าจอด้านล่าง ให้กดปุ่ม <span class="font-bold"
      >ตกลง (OK)</span
    > และถอด USB Drive ออกได้
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    <img src="/goodcatusbjson/06.jpg" alt="ขั้นตอนที่ 6" />
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    7. เมื่อนำ USB Drive มาเปิดใน Computer จะพบโฟลเดอร์ <span class="font-bold">fota</span>
    ซึ่งมีไฟล์
    <span class="font-bold">[vin]_update_by_usb.json</span>
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    <img src="/goodcatusbjson/07.jpg" alt="ขั้นตอนที่ 7" />
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    <img src="/goodcatusbjson/08.jpg" alt="ขั้นตอนที่ 7.1" />
  </div>
  <div class="col-start-3 sm:col-start-2 col-span-4 sm:col-span-5">
    8. นำไฟล์ที่ได้มาอัพโหลดที่ <a class="underline font-bold" href="/dataparser" target="_blank"
      >หน้าตรวจสอบ FW</a
    > เพื่อตรวจสอบเวอร์ชัน FW และอนุญาตให้เราเก็บข้อมูล FW เพื่อใช้ในการวิเคราะห์ในอนาคต (เราจะเก็บข้อมูลโดยไม่สามารถอ้างอิงถึงเจ้าของรถได้
    ไม่มีการเก็บเลข VIN รถที่สามารถสืบย้อนกลับได้ในระบบ)
  </div>
</div>
