
# 🌀 Using `<MotionStack />` – Animation Standards at ZeroToOne

The `MotionStack` component ensures smooth and consistent entrance animations across the site. It handles staggered child reveals, viewport triggers, and clean motion defaults.

---

## ✅ When to Use

Use `<MotionStack>` instead of `motion.div`, `motion.section`, etc. when:
- You have multiple children that should animate in sequence
- You want scroll-based reveal animations
- You want to ensure consistent timing + viewport behavior

---

## 🧱 Example Usage

```tsx
import MotionStack from '@/components/motion/MotionStack';

<MotionStack className="motion-stack-md">
  <motion.div variants={fadeUpChild}>...</motion.div>
  <motion.div variants={fadeUpChild}>...</motion.div>
</MotionStack>
```

---

## ⚙️ Props

| Prop      | Type                | Default | Description                          |
|-----------|---------------------|---------|--------------------------------------|
| `delay`   | `number`            | `0.2`   | Delay before children start animating |
| `stagger` | `number`            | `0.1`   | Time between children animation       |
| `as`      | `div` \| `section`… | `div`   | Optional override for tag type        |
| `className` | `string`          | `''`    | Custom styling / Tailwind classes     |

---

## 🪄 Animation Variant Suggestion

```ts
export const fadeUpChild = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

Combine with `MotionStack` for beautiful scroll reveals 💫

---

## 📦 Powered by

- `framer-motion`
- `viewport={{ once: true }}`
- `staggerChildren` + `delayChildren`

Keep your animations clean, consistent, and codebase DRY. Happy stacking!
