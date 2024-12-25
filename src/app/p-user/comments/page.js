import DataTable from "@/components/templates/p-user/comments/DataTable";
import Layout from "@/components/layouts/UserPanelLayout";
import React from "react";
import connectToDB from "@/configs/db";
import Commentmodel from "@/models/Comment";
import { authUser } from "@/utils/serverHelpers";
import commentModel from "@/models/Comment";

const page = async () => {
  connectToDB();
  const user = await authUser();
//   const comments = await Commentmodel.find(
//     { user: String(user._id) },
//     "-__v"
//   ).populate("productID", "name");

const comments = await commentModel.find({}).populate("productID", "title")
  

  return (
    <Layout>
      <main>
        <DataTable
          comments={JSON.parse(JSON.stringify(comments))}
          title="لیست کامنت‌ها"
        />
        {/* <p className={styles.empty}>
          کامنتی وجود ندارد
        </p>  */}
      </main>
    </Layout>
  );
};

export default page;