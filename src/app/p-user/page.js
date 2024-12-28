import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/index.module.css";
import Box from "@/components/templates/p-user/index/Box";
import Tickets from "@/components/templates/p-user/index/Tickets";
import Orders from "@/components/templates/p-user/index/Orders";
import { authUser } from "@/utils/serverHelpers";
import ticketsModel from '@/models/Ticket'
import wishListModel from '@/models/WishList'

const page = async () => {

  const user = await authUser()
  const tickets = await ticketsModel.find({ user: user._id }).limit(3)
    .populate(
      "department", "title"
    ).sort({ _id: -1 }).lean()


  const allTickets = await ticketsModel.find({ user: user._id })
  const wishList = await wishListModel.find({ user: user._id })


  return (
    <Layout>

      <main>
        <section className={styles.boxes}>
          <Box title="مجموع تیکت ها " value={allTickets.length} />
          <Box title="مجموع کامنت ها " value="0" />
          <Box title="مجموع سفارشات" value="2" />
          <Box title="مجموع علاقه مندی ها" value={wishList.length} />
        </section>
        <section className={styles.contents}>
          <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
          <Orders />
        </section>
      </main>
    </Layout>
  );
};

export default page;
