"use client";
import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helperClass";
export default function DataTable({ tickets, title }) {
  const router = useRouter();

  const showTicketBody = (body) => {
    showSwal(body, undefined, "بستن");

  };

  const answerTicket = (ticket) => {

    swal({
      title: "لطفا پاسخ خود را ثبت کنید:",
      content: "input",
      buttons: "ثبت پاسخ"
    }).then(async (answerText) => {

      const answer = {
        ...ticket,
        body: answerText,
        ticketID: ticket._id
      }

      const res = await fetch("/api/tickets/answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(answer)
      })

      console.log(res);
      

    })


  }

  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>کاربر</th>
              <th>عنوان</th>
              <th>دپارتمان</th>
              <th>مشاهده</th>
              <th>حذف</th>
              <th>پاسخ</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket._id}>
                <td>{index + 1}</td>
                <td>{ticket.user.name}</td>
                <td>{ticket.title}</td>
                <td>{ticket.department.title}</td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => showTicketBody(ticket.body)}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    حذف
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn} onClick={() => answerTicket(ticket)}>
                    پاسخ
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    بن
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
