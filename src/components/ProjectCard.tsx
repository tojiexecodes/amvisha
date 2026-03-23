import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  index: number;
  subtitle: string;
}

const brandCurve = [0.23, 1, 0.32, 1] as const;

const layouts = [
  { imgCols: "lg:col-span-8 lg:col-start-1", titleCols: "lg:col-span-4 lg:col-start-9", metaCols: "lg:col-start-1" },
  { imgCols: "lg:col-span-7 lg:col-start-5", titleCols: "lg:col-span-4 lg:col-start-1", metaCols: "lg:col-start-5" },
  { imgCols: "lg:col-span-8 lg:col-start-3", titleCols: "lg:col-span-6 lg:col-start-3", metaCols: "lg:col-start-3" },
];

const ProjectCard = ({ title, category, year, image, index, subtitle }: ProjectCardProps) => {
  const layout = layouts[index % 3];

  return (
    <motion.article
      className="grid grid-cols-12 gap-4 lg:gap-6 mb-[15vh] lg:mb-[20vh]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-10%" }}
    >
      {/* Metadata */}
      <div className={`col-span-12 ${layout.metaCols} flex gap-6 mb-3 lg:mb-4`}>
        <span className="font-meta text-muted-foreground tabular-nums">{year}</span>
        <span className="font-meta text-foreground">{category}</span>
      </div>

      {/* Image */}
      <div className={`col-span-12 ${layout.imgCols} overflow-hidden bg-secondary`}>
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          variants={{
            initial: { scale: 1.1, clipPath: "inset(100% 0% 0% 0%)" },
            animate: {
              scale: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              transition: { duration: 1.2, ease: brandCurve },
            },
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8, ease: brandCurve }}
          className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover"
        />
      </div>

      {/* Title overlay */}
      <div className={`col-span-12 ${layout.titleCols} -mt-8 lg:-mt-16 z-10 pointer-events-none px-2`}>
        <motion.h2
          variants={{
            initial: { opacity: 0, y: 30 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: brandCurve, delay: 0.3 },
            },
          }}
          className="font-display italic font-light leading-[0.9] tracking-[-0.03em] text-foreground"
          style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}
        >
          {title}
        </motion.h2>
        <motion.p
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { duration: 0.6, delay: 0.5 },
            },
          }}
          className="font-meta text-muted-foreground mt-3"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
