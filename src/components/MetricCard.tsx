import { motion } from "framer-motion";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function MetricCard({ title, value, trend }: { title: string; value: string; trend: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
      <Card>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="mt-2 text-2xl">{value}</CardTitle>
        <p className="mt-1 text-xs text-[#006A4E]">{trend}</p>
      </Card>
    </motion.div>
  );
}
