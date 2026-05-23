const goals = {
  fatLoss: {
    label: "减脂",
    kcal: 1550,
    protein: 100,
    carbs: 150,
    fat: 45,
    fiber: 28,
    focus: "高蛋白、高纤维、低油低糖",
    note: "用足量蛋白和蔬菜提高饱腹感，主食保留但控制份量。"
  },
  muscle: {
    label: "增肌",
    kcal: 2400,
    protein: 145,
    carbs: 300,
    fat: 70,
    fiber: 32,
    focus: "足量蛋白、训练碳水、健康脂肪",
    note: "三餐提高优质蛋白和全谷主食，帮助训练恢复与肌肉合成。"
  },
  shape: {
    label: "塑型",
    kcal: 1900,
    protein: 120,
    carbs: 205,
    fat: 58,
    fiber: 30,
    focus: "均衡宏量营养、稳定能量",
    note: "控制添加糖和油脂，让体态管理更稳定，不做极端节食。"
  }
};

const ingredients = [
  { id: "oats", name: "燕麦片", category: "全谷主食", state: "干重", kcal: 389, protein: 16.9, carbs: 66.3, fat: 6.9, fiber: 10.6, defaultGram: 40, aliases: ["燕麦", "燕麦片", "oats"] },
  { id: "brown_rice", name: "糙米饭", category: "全谷主食", state: "熟重", kcal: 123, protein: 2.7, carbs: 25.6, fat: 1.0, fiber: 1.6, defaultGram: 120, aliases: ["糙米", "糙米饭"] },
  { id: "quinoa", name: "藜麦", category: "全谷主食", state: "熟重", kcal: 120, protein: 4.4, carbs: 21.3, fat: 1.9, fiber: 2.8, defaultGram: 120, aliases: ["藜麦", "藜麥"] },
  { id: "sweet_potato", name: "红薯", category: "全谷主食", state: "熟重", kcal: 90, protein: 2.0, carbs: 20.7, fat: 0.2, fiber: 3.3, defaultGram: 160, aliases: ["红薯", "地瓜", "番薯"] },
  { id: "whole_pasta", name: "全麦意面", category: "全谷主食", state: "熟重", kcal: 124, protein: 5.3, carbs: 26.5, fat: 0.5, fiber: 3.9, defaultGram: 160, aliases: ["全麦意面", "意面", "意大利面"] },
  { id: "whole_bread", name: "全麦面包", category: "全谷主食", state: "可食部", kcal: 247, protein: 13.0, carbs: 41.0, fat: 4.2, fiber: 7.0, defaultGram: 60, aliases: ["全麦面包", "面包", "吐司"] },

  { id: "chicken_breast", name: "鸡胸肉", category: "肉禽鱼蛋", state: "熟重", kcal: 165, protein: 31.0, carbs: 0, fat: 3.6, fiber: 0, defaultGram: 150, aliases: ["鸡胸", "鸡胸肉", "鸡肉", "水煮鸡胸", "煎鸡胸"] },
  { id: "salmon", name: "三文鱼", category: "肉禽鱼蛋", state: "熟重", kcal: 206, protein: 22.1, carbs: 0, fat: 12.4, fiber: 0, defaultGram: 120, aliases: ["三文鱼", "鲑鱼", "鮭鱼"] },
  { id: "tuna", name: "金枪鱼", category: "肉禽鱼蛋", state: "水浸", kcal: 116, protein: 25.5, carbs: 0, fat: 0.8, fiber: 0, defaultGram: 100, aliases: ["金枪鱼", "吞拿鱼", "tuna"] },
  { id: "shrimp", name: "虾仁", category: "肉禽鱼蛋", state: "熟重", kcal: 99, protein: 24.0, carbs: 0.2, fat: 0.3, fiber: 0, defaultGram: 120, aliases: ["虾仁", "虾", "大虾"] },
  { id: "lean_beef", name: "瘦牛肉", category: "肉禽鱼蛋", state: "熟重", kcal: 217, protein: 26.1, carbs: 0, fat: 11.8, fiber: 0, defaultGram: 130, aliases: ["瘦牛肉", "牛肉", "牛排", "牛扒", "煎牛排", "烤牛排", "steak", "beef"] },
  { id: "egg", name: "鸡蛋", category: "肉禽鱼蛋", state: "可食部", kcal: 143, protein: 12.6, carbs: 0.7, fat: 9.5, fiber: 0, defaultGram: 100, aliases: ["鸡蛋", "全蛋", "蛋", "水煮蛋", "煮鸡蛋"] },
  { id: "egg_white", name: "蛋清", category: "肉禽鱼蛋", state: "可食部", kcal: 52, protein: 10.9, carbs: 0.7, fat: 0.2, fiber: 0, defaultGram: 120, aliases: ["蛋清", "蛋白", "鸡蛋白"] },

  { id: "firm_tofu", name: "北豆腐", category: "豆乳蛋白", state: "可食部", kcal: 144, protein: 17.3, carbs: 2.8, fat: 8.7, fiber: 2.3, defaultGram: 150, aliases: ["豆腐", "北豆腐", "老豆腐"] },
  { id: "edamame", name: "毛豆仁", category: "豆乳蛋白", state: "熟重", kcal: 121, protein: 11.9, carbs: 8.9, fat: 5.2, fiber: 5.2, defaultGram: 100, aliases: ["毛豆", "毛豆仁"] },
  { id: "lentils", name: "小扁豆", category: "豆乳蛋白", state: "熟重", kcal: 116, protein: 9.0, carbs: 20.1, fat: 0.4, fiber: 7.9, defaultGram: 120, aliases: ["小扁豆", "扁豆"] },
  { id: "chickpeas", name: "鹰嘴豆", category: "豆乳蛋白", state: "熟重", kcal: 164, protein: 8.9, carbs: 27.4, fat: 2.6, fiber: 7.6, defaultGram: 100, aliases: ["鹰嘴豆", "鹰嘴豆仁"] },
  { id: "greek_yogurt", name: "希腊酸奶", category: "豆乳蛋白", state: "无糖", kcal: 59, protein: 10.3, carbs: 3.6, fat: 0.4, fiber: 0, defaultGram: 180, aliases: ["希腊酸奶", "酸奶", "无糖酸奶"] },
  { id: "milk_lowfat", name: "低脂牛奶", category: "豆乳蛋白", state: "液体", kcal: 42, protein: 3.4, carbs: 5.0, fat: 1.0, fiber: 0, defaultGram: 250, aliases: ["低脂牛奶", "牛奶", "奶"] },
  { id: "cottage_cheese", name: "茅屋奶酪", category: "豆乳蛋白", state: "低脂", kcal: 98, protein: 11.1, carbs: 3.4, fat: 4.3, fiber: 0, defaultGram: 120, aliases: ["茅屋奶酪", "奶酪"] },

  { id: "broccoli", name: "西兰花", category: "蔬菜", state: "生重", kcal: 34, protein: 2.8, carbs: 6.6, fat: 0.4, fiber: 2.6, defaultGram: 180, aliases: ["西兰花", "西蘭花", "青花菜"] },
  { id: "spinach", name: "菠菜", category: "蔬菜", state: "生重", kcal: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, defaultGram: 100, aliases: ["菠菜"] },
  { id: "tomato", name: "番茄", category: "蔬菜", state: "生重", kcal: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, defaultGram: 120, aliases: ["番茄", "西红柿"] },
  { id: "cucumber", name: "黄瓜", category: "蔬菜", state: "生重", kcal: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5, defaultGram: 120, aliases: ["黄瓜", "青瓜"] },
  { id: "bell_pepper", name: "彩椒", category: "蔬菜", state: "生重", kcal: 31, protein: 1.0, carbs: 6.0, fat: 0.3, fiber: 2.1, defaultGram: 100, aliases: ["彩椒", "甜椒", "青椒"] },
  { id: "carrot", name: "胡萝卜", category: "蔬菜", state: "生重", kcal: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fiber: 2.8, defaultGram: 90, aliases: ["胡萝卜", "红萝卜"] },
  { id: "mushroom", name: "蘑菇", category: "蔬菜", state: "生重", kcal: 22, protein: 3.1, carbs: 3.3, fat: 0.3, fiber: 1.0, defaultGram: 120, aliases: ["蘑菇", "香菇", "口蘑"] },

  { id: "banana", name: "香蕉", category: "水果", state: "可食部", kcal: 89, protein: 1.1, carbs: 22.8, fat: 0.3, fiber: 2.6, defaultGram: 100, aliases: ["香蕉"] },
  { id: "blueberry", name: "蓝莓", category: "水果", state: "可食部", kcal: 57, protein: 0.7, carbs: 14.5, fat: 0.3, fiber: 2.4, defaultGram: 80, aliases: ["蓝莓", "藍莓"] },
  { id: "apple", name: "苹果", category: "水果", state: "可食部", kcal: 52, protein: 0.3, carbs: 13.8, fat: 0.2, fiber: 2.4, defaultGram: 150, aliases: ["苹果", "蘋果"] },
  { id: "orange", name: "橙子", category: "水果", state: "可食部", kcal: 47, protein: 0.9, carbs: 11.8, fat: 0.1, fiber: 2.4, defaultGram: 140, aliases: ["橙子", "橙"] },
  { id: "kiwi", name: "猕猴桃", category: "水果", state: "可食部", kcal: 61, protein: 1.1, carbs: 14.7, fat: 0.5, fiber: 3.0, defaultGram: 100, aliases: ["猕猴桃", "奇异果"] },

  { id: "avocado", name: "牛油果", category: "健康脂肪", state: "可食部", kcal: 160, protein: 2.0, carbs: 8.5, fat: 14.7, fiber: 6.7, defaultGram: 70, aliases: ["牛油果", "鳄梨"] },
  { id: "olive_oil", name: "橄榄油", category: "健康脂肪", state: "烹调油", kcal: 884, protein: 0, carbs: 0, fat: 100, fiber: 0, defaultGram: 6, aliases: ["橄榄油", "橄欖油", "油"] },
  { id: "almonds", name: "杏仁", category: "健康脂肪", state: "可食部", kcal: 579, protein: 21.2, carbs: 21.6, fat: 49.9, fiber: 12.5, defaultGram: 15, aliases: ["杏仁", "扁桃仁"] },
  { id: "walnut", name: "核桃", category: "健康脂肪", state: "可食部", kcal: 654, protein: 15.2, carbs: 13.7, fat: 65.2, fiber: 6.7, defaultGram: 12, aliases: ["核桃"] },
  { id: "chia", name: "奇亚籽", category: "健康脂肪", state: "干重", kcal: 486, protein: 16.5, carbs: 42.1, fat: 30.7, fiber: 34.4, defaultGram: 10, aliases: ["奇亚籽", "奇亞籽"] },

  { id: "white_rice", name: "白米饭", category: "主食", state: "熟重", kcal: 130, protein: 2.4, carbs: 28.7, fat: 0.3, fiber: 0.4, defaultGram: 120, aliases: ["白米饭", "米饭", "米飯", "白饭"] },
  { id: "millet_porridge", name: "小米粥", category: "主食", state: "熟重", kcal: 46, protein: 1.4, carbs: 9.1, fat: 0.5, fiber: 0.4, defaultGram: 250, aliases: ["小米粥", "小米"] },
  { id: "buckwheat_noodles", name: "荞麦面", category: "主食", state: "熟重", kcal: 99, protein: 5.1, carbs: 21.4, fat: 0.1, fiber: 1.5, defaultGram: 180, aliases: ["荞麦面", "荞麦", "蕎麥麵", "soba"] },
  { id: "corn", name: "玉米", category: "主食", state: "熟重", kcal: 96, protein: 3.4, carbs: 21.0, fat: 1.5, fiber: 2.4, defaultGram: 160, aliases: ["玉米", "甜玉米"] },
  { id: "potato", name: "土豆", category: "主食", state: "熟重", kcal: 87, protein: 1.9, carbs: 20.1, fat: 0.1, fiber: 1.8, defaultGram: 180, aliases: ["土豆", "马铃薯", "馬鈴薯"] },
  { id: "pumpkin", name: "南瓜", category: "主食", state: "熟重", kcal: 49, protein: 1.8, carbs: 12.0, fat: 0.2, fiber: 2.0, defaultGram: 180, aliases: ["南瓜", "贝贝南瓜"] },
  { id: "barley", name: "大麦仁", category: "全谷主食", state: "熟重", kcal: 123, protein: 2.3, carbs: 28.2, fat: 0.4, fiber: 3.8, defaultGram: 130, aliases: ["大麦", "大麦仁", "薏麦"] },
  { id: "couscous", name: "库斯库斯", category: "主食", state: "熟重", kcal: 112, protein: 3.8, carbs: 23.2, fat: 0.2, fiber: 1.4, defaultGram: 150, aliases: ["库斯库斯", "蒸粗麦粉", "couscous"] },

  { id: "turkey_breast", name: "火鸡胸肉", category: "肉禽鱼蛋", state: "熟重", kcal: 135, protein: 29.0, carbs: 0, fat: 1.6, fiber: 0, defaultGram: 140, aliases: ["火鸡胸", "火鸡胸肉", "火鸡肉"] },
  { id: "chicken_thigh_skinless", name: "去皮鸡腿肉", category: "肉禽鱼蛋", state: "熟重", kcal: 177, protein: 24.2, carbs: 0, fat: 8.4, fiber: 0, defaultGram: 140, aliases: ["去皮鸡腿", "鸡腿肉", "去皮鸡腿肉"] },
  { id: "pork_tenderloin", name: "猪里脊", category: "肉禽鱼蛋", state: "熟重", kcal: 143, protein: 26.0, carbs: 0, fat: 3.5, fiber: 0, defaultGram: 130, aliases: ["猪里脊", "里脊肉", "瘦猪肉", "pork"] },
  { id: "cod", name: "鳕鱼", category: "肉禽鱼蛋", state: "熟重", kcal: 105, protein: 22.8, carbs: 0, fat: 0.9, fiber: 0, defaultGram: 150, aliases: ["鳕鱼", "鱈魚", "cod", "白鱼", "鱼肉"] },
  { id: "mackerel", name: "青花鱼", category: "肉禽鱼蛋", state: "熟重", kcal: 205, protein: 18.6, carbs: 0, fat: 13.9, fiber: 0, defaultGram: 120, aliases: ["青花鱼", "鲭鱼", "鯖魚"] },
  { id: "sardines", name: "沙丁鱼", category: "肉禽鱼蛋", state: "熟重", kcal: 208, protein: 24.6, carbs: 0, fat: 11.5, fiber: 0, defaultGram: 100, aliases: ["沙丁鱼", "沙甸鱼"] },
  { id: "scallop", name: "扇贝柱", category: "肉禽鱼蛋", state: "熟重", kcal: 111, protein: 20.5, carbs: 5.4, fat: 0.8, fiber: 0, defaultGram: 120, aliases: ["扇贝", "扇贝柱", "干贝柱"] },
  { id: "silken_tofu", name: "嫩豆腐", category: "豆乳蛋白", state: "可食部", kcal: 55, protein: 4.8, carbs: 1.9, fat: 2.7, fiber: 0.3, defaultGram: 180, aliases: ["嫩豆腐", "内酯豆腐"] },
  { id: "tempeh", name: "天贝", category: "豆乳蛋白", state: "可食部", kcal: 193, protein: 20.3, carbs: 7.6, fat: 10.8, fiber: 5.4, defaultGram: 120, aliases: ["天贝", "天貝", "tempeh"] },
  { id: "soy_milk_unsweetened", name: "无糖豆浆", category: "豆乳蛋白", state: "液体", kcal: 33, protein: 2.9, carbs: 1.7, fat: 1.6, fiber: 0.4, defaultGram: 250, aliases: ["无糖豆浆", "豆浆", "豆漿"] },
  { id: "black_beans", name: "黑豆", category: "豆乳蛋白", state: "熟重", kcal: 132, protein: 8.9, carbs: 23.7, fat: 0.5, fiber: 8.7, defaultGram: 120, aliases: ["黑豆"] },
  { id: "kidney_beans", name: "红腰豆", category: "豆乳蛋白", state: "熟重", kcal: 127, protein: 8.7, carbs: 22.8, fat: 0.5, fiber: 6.4, defaultGram: 120, aliases: ["红腰豆", "芸豆", "红芸豆"] },
  { id: "peas", name: "青豆", category: "豆乳蛋白", state: "熟重", kcal: 84, protein: 5.4, carbs: 15.6, fat: 0.2, fiber: 5.5, defaultGram: 100, aliases: ["青豆", "豌豆"] },

  { id: "lettuce", name: "生菜", category: "蔬菜", state: "生重", kcal: 15, protein: 1.4, carbs: 2.9, fat: 0.2, fiber: 1.3, defaultGram: 100, aliases: ["生菜", "罗马生菜"] },
  { id: "cabbage", name: "卷心菜", category: "蔬菜", state: "生重", kcal: 25, protein: 1.3, carbs: 5.8, fat: 0.1, fiber: 2.5, defaultGram: 150, aliases: ["卷心菜", "包菜", "圆白菜"] },
  { id: "napa_cabbage", name: "大白菜", category: "蔬菜", state: "生重", kcal: 16, protein: 1.2, carbs: 3.2, fat: 0.2, fiber: 1.2, defaultGram: 180, aliases: ["大白菜", "白菜"] },
  { id: "bok_choy", name: "小白菜", category: "蔬菜", state: "生重", kcal: 13, protein: 1.5, carbs: 2.2, fat: 0.2, fiber: 1.0, defaultGram: 160, aliases: ["小白菜", "上海青", "青江菜"] },
  { id: "asparagus", name: "芦笋", category: "蔬菜", state: "生重", kcal: 20, protein: 2.2, carbs: 3.9, fat: 0.1, fiber: 2.1, defaultGram: 120, aliases: ["芦笋", "蘆筍"] },
  { id: "zucchini", name: "西葫芦", category: "蔬菜", state: "生重", kcal: 17, protein: 1.2, carbs: 3.1, fat: 0.3, fiber: 1.0, defaultGram: 160, aliases: ["西葫芦", "节瓜"] },
  { id: "eggplant", name: "茄子", category: "蔬菜", state: "生重", kcal: 25, protein: 1.0, carbs: 5.9, fat: 0.2, fiber: 3.0, defaultGram: 160, aliases: ["茄子"] },
  { id: "onion", name: "洋葱", category: "蔬菜", state: "生重", kcal: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7, defaultGram: 80, aliases: ["洋葱", "洋蔥"] },
  { id: "celery", name: "芹菜", category: "蔬菜", state: "生重", kcal: 16, protein: 0.7, carbs: 3.0, fat: 0.2, fiber: 1.6, defaultGram: 120, aliases: ["芹菜"] },
  { id: "kale", name: "羽衣甘蓝", category: "蔬菜", state: "生重", kcal: 35, protein: 2.9, carbs: 4.4, fat: 1.5, fiber: 4.1, defaultGram: 90, aliases: ["羽衣甘蓝", "羽衣甘藍", "kale"] },
  { id: "cauliflower", name: "花椰菜", category: "蔬菜", state: "生重", kcal: 25, protein: 1.9, carbs: 5.0, fat: 0.3, fiber: 2.0, defaultGram: 180, aliases: ["花椰菜", "菜花", "白花菜"] },
  { id: "green_beans", name: "四季豆", category: "蔬菜", state: "生重", kcal: 31, protein: 1.8, carbs: 7.0, fat: 0.1, fiber: 3.4, defaultGram: 150, aliases: ["四季豆", "豆角"] },
  { id: "seaweed", name: "海带", category: "蔬菜", state: "熟重", kcal: 43, protein: 1.7, carbs: 9.6, fat: 0.6, fiber: 1.3, defaultGram: 80, aliases: ["海带", "海帶", "昆布"] },

  { id: "strawberry", name: "草莓", category: "水果", state: "可食部", kcal: 32, protein: 0.7, carbs: 7.7, fat: 0.3, fiber: 2.0, defaultGram: 120, aliases: ["草莓"] },
  { id: "pear", name: "梨", category: "水果", state: "可食部", kcal: 57, protein: 0.4, carbs: 15.2, fat: 0.1, fiber: 3.1, defaultGram: 150, aliases: ["梨", "雪梨"] },
  { id: "grapes", name: "葡萄", category: "水果", state: "可食部", kcal: 69, protein: 0.7, carbs: 18.1, fat: 0.2, fiber: 0.9, defaultGram: 100, aliases: ["葡萄"] },
  { id: "grapefruit", name: "西柚", category: "水果", state: "可食部", kcal: 42, protein: 0.8, carbs: 10.7, fat: 0.1, fiber: 1.6, defaultGram: 150, aliases: ["西柚", "葡萄柚"] },
  { id: "mango", name: "芒果", category: "水果", state: "可食部", kcal: 60, protein: 0.8, carbs: 15.0, fat: 0.4, fiber: 1.6, defaultGram: 100, aliases: ["芒果"] },

  { id: "sesame_seeds", name: "芝麻", category: "健康脂肪", state: "干重", kcal: 573, protein: 17.7, carbs: 23.5, fat: 49.7, fiber: 11.8, defaultGram: 8, aliases: ["芝麻", "白芝麻", "黑芝麻"] },
  { id: "rye_bread", name: "黑麦面包", category: "全谷主食", state: "可食部", kcal: 259, protein: 8.5, carbs: 48.3, fat: 3.3, fiber: 5.8, defaultGram: 70, aliases: ["黑麦面包", "黑麥面包", "rye bread"] },
  { id: "udon", name: "乌冬面", category: "主食", state: "熟重", kcal: 127, protein: 3.3, carbs: 25.0, fat: 0.3, fiber: 1.0, defaultGram: 180, aliases: ["乌冬面", "烏冬", "udon"] },
  { id: "rice_noodles", name: "米粉", category: "主食", state: "熟重", kcal: 109, protein: 1.8, carbs: 24.9, fat: 0.2, fiber: 0.9, defaultGram: 180, aliases: ["米粉", "河粉", "rice noodles"] },
  { id: "tilapia", name: "罗非鱼", category: "肉禽鱼蛋", state: "熟重", kcal: 128, protein: 26.2, carbs: 0, fat: 2.7, fiber: 0, defaultGram: 150, aliases: ["罗非鱼", "羅非魚", "tilapia"] },
  { id: "lean_lamb", name: "瘦羊肉", category: "肉禽鱼蛋", state: "熟重", kcal: 206, protein: 28.0, carbs: 0, fat: 9.0, fiber: 0, defaultGram: 120, aliases: ["瘦羊肉", "羊肉", "羊排", "lamb"] },
  { id: "duck_breast_skinless", name: "去皮鸭胸", category: "肉禽鱼蛋", state: "熟重", kcal: 201, protein: 24.5, carbs: 0, fat: 10.5, fiber: 0, defaultGram: 120, aliases: ["去皮鸭胸", "鸭胸", "鴨胸"] },
  { id: "quail_egg", name: "鹌鹑蛋", category: "肉禽鱼蛋", state: "可食部", kcal: 158, protein: 13.1, carbs: 0.4, fat: 11.1, fiber: 0, defaultGram: 60, aliases: ["鹌鹑蛋", "鵪鶉蛋"] },
  { id: "natto", name: "纳豆", category: "豆乳蛋白", state: "可食部", kcal: 212, protein: 18.0, carbs: 14.0, fat: 11.0, fiber: 5.4, defaultGram: 80, aliases: ["纳豆", "納豆", "natto"] },
  { id: "soybeans", name: "黄豆", category: "豆乳蛋白", state: "熟重", kcal: 173, protein: 16.6, carbs: 9.9, fat: 9.0, fiber: 6.0, defaultGram: 100, aliases: ["黄豆", "黃豆", "大豆"] },
  { id: "pea_protein_tofu", name: "豌豆蛋白豆腐", category: "豆乳蛋白", state: "可食部", kcal: 118, protein: 14.0, carbs: 4.5, fat: 4.2, fiber: 1.2, defaultGram: 130, aliases: ["豌豆蛋白豆腐", "高蛋白豆腐"] },
  { id: "purple_cabbage", name: "紫甘蓝", category: "蔬菜", state: "生重", kcal: 31, protein: 1.4, carbs: 7.4, fat: 0.2, fiber: 2.1, defaultGram: 120, aliases: ["紫甘蓝", "紫椰菜"] },
  { id: "bean_sprouts", name: "豆芽", category: "蔬菜", state: "生重", kcal: 30, protein: 3.0, carbs: 5.9, fat: 0.2, fiber: 1.8, defaultGram: 150, aliases: ["豆芽", "绿豆芽", "芽菜"] },
  { id: "okra", name: "秋葵", category: "蔬菜", state: "生重", kcal: 33, protein: 1.9, carbs: 7.5, fat: 0.2, fiber: 3.2, defaultGram: 130, aliases: ["秋葵", "okra"] },
  { id: "lotus_root", name: "莲藕", category: "蔬菜", state: "可食部", kcal: 74, protein: 2.6, carbs: 17.2, fat: 0.1, fiber: 4.9, defaultGram: 150, aliases: ["莲藕", "藕片", "蓮藕"] },
  { id: "winter_melon", name: "冬瓜", category: "蔬菜", state: "生重", kcal: 13, protein: 0.4, carbs: 3.0, fat: 0.2, fiber: 0.9, defaultGram: 220, aliases: ["冬瓜"] },
  { id: "radish", name: "白萝卜", category: "蔬菜", state: "生重", kcal: 18, protein: 0.6, carbs: 4.1, fat: 0.1, fiber: 1.6, defaultGram: 180, aliases: ["白萝卜", "萝卜", "蘿蔔"] },
  { id: "snow_peas", name: "荷兰豆", category: "蔬菜", state: "生重", kcal: 42, protein: 2.8, carbs: 7.6, fat: 0.2, fiber: 2.6, defaultGram: 120, aliases: ["荷兰豆", "甜豆", "snow peas"] },
  { id: "dragon_fruit", name: "火龙果", category: "水果", state: "可食部", kcal: 57, protein: 1.1, carbs: 13.0, fat: 0.1, fiber: 3.0, defaultGram: 150, aliases: ["火龙果", "火龍果"] },
  { id: "peach", name: "桃子", category: "水果", state: "可食部", kcal: 39, protein: 0.9, carbs: 9.5, fat: 0.3, fiber: 1.5, defaultGram: 140, aliases: ["桃子", "水蜜桃"] },
  { id: "watermelon", name: "西瓜", category: "水果", state: "可食部", kcal: 30, protein: 0.6, carbs: 7.6, fat: 0.2, fiber: 0.4, defaultGram: 200, aliases: ["西瓜"] },
  { id: "flaxseed", name: "亚麻籽", category: "健康脂肪", state: "干重", kcal: 534, protein: 18.3, carbs: 28.9, fat: 42.2, fiber: 27.3, defaultGram: 8, aliases: ["亚麻籽", "亞麻籽", "flaxseed"] },
  { id: "peanut_butter", name: "花生酱", category: "健康脂肪", state: "无糖", kcal: 588, protein: 25.1, carbs: 20.0, fat: 50.0, fiber: 6.0, defaultGram: 12, aliases: ["花生酱", "花生醬", "peanut butter"] },
  { id: "oat_bran", name: "燕麦麸", category: "全谷主食", state: "干重", kcal: 246, protein: 17.3, carbs: 66.2, fat: 7.0, fiber: 15.4, defaultGram: 35, aliases: ["燕麦麸", "燕麥麩", "oat bran"] },
  { id: "brown_rice_noodles", name: "糙米米粉", category: "主食", state: "熟重", kcal: 110, protein: 2.3, carbs: 24.0, fat: 0.7, fiber: 1.4, defaultGram: 170, aliases: ["糙米米粉", "糙米粉", "米线", "米線"] },
  { id: "taro", name: "芋头", category: "主食", state: "熟重", kcal: 112, protein: 1.5, carbs: 26.5, fat: 0.2, fiber: 4.1, defaultGram: 150, aliases: ["芋头", "芋頭"] },
  { id: "yam", name: "山药", category: "主食", state: "熟重", kcal: 57, protein: 1.9, carbs: 12.4, fat: 0.2, fiber: 0.8, defaultGram: 160, aliases: ["山药", "淮山", "山藥"] },
  { id: "beef_shank", name: "牛腱子", category: "肉禽鱼蛋", state: "熟重", kcal: 155, protein: 31.0, carbs: 0, fat: 3.5, fiber: 0, defaultGram: 140, aliases: ["牛腱", "牛腱子", "酱牛肉"] },
  { id: "squid", name: "鱿鱼", category: "肉禽鱼蛋", state: "熟重", kcal: 92, protein: 15.6, carbs: 3.1, fat: 1.4, fiber: 0, defaultGram: 130, aliases: ["鱿鱼", "魷魚", "squid"] },
  { id: "crab", name: "蟹肉", category: "肉禽鱼蛋", state: "熟重", kcal: 97, protein: 19.4, carbs: 0, fat: 1.5, fiber: 0, defaultGram: 120, aliases: ["蟹肉", "螃蟹", "crab"] },
  { id: "mussels", name: "贻贝", category: "肉禽鱼蛋", state: "熟重", kcal: 172, protein: 23.8, carbs: 7.4, fat: 4.5, fiber: 0, defaultGram: 120, aliases: ["贻贝", "青口", "淡菜", "mussels"] },
  { id: "seitan", name: "烤面筋", category: "豆乳蛋白", state: "熟重", kcal: 143, protein: 25.0, carbs: 5.0, fat: 2.0, fiber: 0.6, defaultGram: 120, aliases: ["面筋", "烤面筋", "seitan"] },
  { id: "tofu_skin", name: "豆腐皮", category: "豆乳蛋白", state: "可食部", kcal: 409, protein: 45.0, carbs: 18.0, fat: 17.0, fiber: 1.0, defaultGram: 60, aliases: ["豆腐皮", "千张", "腐竹"] },
  { id: "mung_beans", name: "绿豆", category: "豆乳蛋白", state: "熟重", kcal: 105, protein: 7.0, carbs: 19.2, fat: 0.4, fiber: 7.6, defaultGram: 130, aliases: ["绿豆", "綠豆"] },
  { id: "beetroot", name: "甜菜根", category: "蔬菜", state: "可食部", kcal: 43, protein: 1.6, carbs: 9.6, fat: 0.2, fiber: 2.8, defaultGram: 120, aliases: ["甜菜根", "红菜头"] },
  { id: "arugula", name: "芝麻菜", category: "蔬菜", state: "生重", kcal: 25, protein: 2.6, carbs: 3.7, fat: 0.7, fiber: 1.6, defaultGram: 70, aliases: ["芝麻菜", "火箭菜", "arugula"] },
  { id: "chinese_chives", name: "韭菜", category: "蔬菜", state: "生重", kcal: 30, protein: 2.4, carbs: 4.6, fat: 0.4, fiber: 2.4, defaultGram: 100, aliases: ["韭菜"] },
  { id: "pineapple", name: "菠萝", category: "水果", state: "可食部", kcal: 50, protein: 0.5, carbs: 13.1, fat: 0.1, fiber: 1.4, defaultGram: 120, aliases: ["菠萝", "凤梨", "鳳梨"] },
  { id: "papaya", name: "木瓜", category: "水果", state: "可食部", kcal: 43, protein: 0.5, carbs: 10.8, fat: 0.3, fiber: 1.7, defaultGram: 140, aliases: ["木瓜"] },
  { id: "pomegranate", name: "石榴", category: "水果", state: "可食部", kcal: 83, protein: 1.7, carbs: 18.7, fat: 1.2, fiber: 4.0, defaultGram: 90, aliases: ["石榴"] },
  { id: "pumpkin_seeds", name: "南瓜籽", category: "健康脂肪", state: "干重", kcal: 559, protein: 30.2, carbs: 10.7, fat: 49.0, fiber: 6.0, defaultGram: 12, aliases: ["南瓜籽", "南瓜子", "pumpkin seeds"] },
  { id: "cashews", name: "腰果", category: "健康脂肪", state: "可食部", kcal: 553, protein: 18.2, carbs: 30.2, fat: 43.9, fiber: 3.3, defaultGram: 12, aliases: ["腰果", "cashews"] },
  { id: "pistachios", name: "开心果", category: "健康脂肪", state: "可食部", kcal: 560, protein: 20.2, carbs: 27.2, fat: 45.3, fiber: 10.6, defaultGram: 12, aliases: ["开心果", "開心果", "pistachio"] }
];

const mealTemplates = {
  fatLoss: {
    breakfast: [
      {
        title: "高蛋白莓果燕麦碗",
        reason: "无糖酸奶和蛋清拉高蛋白，燕麦、蓝莓和奇亚籽提供慢碳水与纤维。",
        items: [["greek_yogurt", 200], ["oats", 35], ["blueberry", 90], ["chia", 8], ["egg_white", 100]],
        steps: [
          "燕麦片 35g 加少量热水焖 5 分钟，放凉到温热。",
          "蛋清 100g 用不粘锅小火炒熟，不额外加油。",
          "碗中加入无糖希腊酸奶 200g、燕麦、蓝莓 90g 和奇亚籽 8g。",
          "把蛋清放在旁边同食，整餐不再额外加糖。"
        ]
      },
      {
        title: "鸡蛋牛油果全麦早餐",
        reason: "保留优质脂肪但控制牛油果克数，搭配全麦面包稳定上午能量。",
        items: [["egg", 100], ["whole_bread", 55], ["avocado", 45], ["tomato", 120], ["spinach", 60]],
        steps: [
          "鸡蛋 100g 水煮 8 到 10 分钟，剥壳后对半切开。",
          "全麦面包 55g 烤到微脆，牛油果 45g 压成泥。",
          "菠菜 60g 和番茄 120g 洗净切好，铺在盘底。",
          "面包抹牛油果泥，搭配鸡蛋和蔬菜，避免额外沙拉酱。"
        ]
      }
    ],
    lunch: [
      {
        title: "鸡胸糙米彩蔬碗",
        reason: "鸡胸肉提供瘦蛋白，糙米饭留出训练和工作所需碳水，蔬菜占比高。",
        items: [["chicken_breast", 145], ["brown_rice", 125], ["broccoli", 200], ["bell_pepper", 90], ["olive_oil", 5]],
        steps: [
          "鸡胸肉 145g 切厚片，用黑胡椒和少量盐腌 10 分钟。",
          "不粘锅加入橄榄油 5g，中火煎鸡胸肉，每面约 3 到 4 分钟。",
          "西兰花 200g和彩椒 90g 蒸或快炒到断生，保持脆感。",
          "糙米饭 125g 铺底，放上鸡胸和蔬菜，酱汁控制在 1 汤匙以内。"
        ]
      },
      {
        title: "虾仁藜麦温沙拉",
        reason: "虾仁低脂高蛋白，藜麦和蔬菜让热量不高但体积足。",
        items: [["shrimp", 140], ["quinoa", 130], ["cucumber", 120], ["tomato", 120], ["olive_oil", 5]],
        steps: [
          "虾仁 140g 焯水 90 秒到变色，捞出沥干。",
          "熟藜麦 130g 放入碗中，黄瓜 120g 和番茄 120g 切块。",
          "橄榄油 5g、柠檬汁和黑胡椒调成轻酱汁。",
          "所有食材拌匀，最后再加盐，避免口味过重。"
        ]
      }
    ],
    dinner: [
      {
        title: "三文鱼红薯菠菜盘",
        reason: "晚餐用鱼类脂肪替代重油，红薯提供饱腹主食，菠菜补足微量营养。",
        items: [["salmon", 115], ["sweet_potato", 170], ["spinach", 120], ["tomato", 100], ["olive_oil", 4]],
        steps: [
          "红薯 170g 蒸熟或烤熟，切成厚片。",
          "三文鱼 115g 用厨房纸吸干，小火煎到两面金黄。",
          "菠菜 120g 用橄榄油 4g 快速翻炒 30 到 45 秒。",
          "番茄 100g 切块装盘，整盘用柠檬汁提味。"
        ]
      },
      {
        title: "豆腐鹰嘴豆蔬菜锅",
        reason: "用植物蛋白做晚餐，脂肪适中，膳食纤维更高。",
        items: [["firm_tofu", 170], ["chickpeas", 85], ["mushroom", 140], ["broccoli", 160], ["olive_oil", 5]],
        steps: [
          "北豆腐 170g 切块，厨房纸吸去表面水分。",
          "锅中加橄榄油 5g，先煎豆腐到表面微黄。",
          "加入蘑菇 140g、西兰花 160g 和鹰嘴豆 85g，少量清水焖 4 分钟。",
          "用低钠酱油或黑胡椒调味，避免勾芡和额外糖。"
        ]
      }
    ]
  },
  muscle: {
    breakfast: [
      {
        title: "香蕉牛奶增肌燕麦",
        reason: "提高燕麦和牛奶份量，训练日早餐更适合补碳水和蛋白。",
        items: [["oats", 75], ["milk_lowfat", 280], ["banana", 120], ["egg", 100], ["almonds", 15]],
        steps: [
          "燕麦片 75g 与低脂牛奶 280g 小火煮 4 到 6 分钟。",
          "香蕉 120g 切片放入燕麦中，杏仁 15g 切碎撒上。",
          "鸡蛋 100g 水煮或煎成太阳蛋，煎蛋时使用不粘锅。",
          "训练前 2 小时吃完；如果离训练很近，可把杏仁减半。"
        ]
      },
      {
        title: "奶酪鸡蛋全麦盘",
        reason: "鸡蛋、奶酪和全麦面包组成高蛋白早餐，脂肪和碳水都够用。",
        items: [["egg", 120], ["cottage_cheese", 160], ["whole_bread", 90], ["apple", 150], ["spinach", 80]],
        steps: [
          "鸡蛋 120g 炒熟，菠菜 80g 同锅翻炒至变软。",
          "全麦面包 90g 烤热，茅屋奶酪 160g 直接装盘。",
          "苹果 150g 切片搭配，增加口感和纤维。",
          "整餐不加糖浆，咖啡建议选择无糖。"
        ]
      }
    ],
    lunch: [
      {
        title: "双份鸡胸藜麦训练碗",
        reason: "高蛋白配高质量碳水，适合力量训练日午餐。",
        items: [["chicken_breast", 210], ["quinoa", 220], ["broccoli", 180], ["carrot", 90], ["olive_oil", 10]],
        steps: [
          "鸡胸肉 210g 切片，少盐、黑胡椒、蒜粉腌 10 分钟。",
          "橄榄油 10g 入锅，鸡胸肉中火煎熟。",
          "西兰花 180g 和胡萝卜 90g 蒸熟，保留清脆口感。",
          "熟藜麦 220g 铺底，放上鸡胸和蔬菜，训练后 2 小时内食用。"
        ]
      },
      {
        title: "瘦牛全麦意面",
        reason: "瘦牛肉补铁和蛋白，全麦意面补训练碳水，适合增肌期。",
        items: [["lean_beef", 170], ["whole_pasta", 230], ["mushroom", 130], ["tomato", 160], ["olive_oil", 8]],
        steps: [
          "瘦牛肉 170g 切条，番茄 160g 切丁，蘑菇 130g 切片。",
          "橄榄油 8g 热锅，先煎牛肉到变色后盛出。",
          "同锅炒番茄和蘑菇，加少量水形成自然酱汁。",
          "加入熟全麦意面 230g 和牛肉回锅拌匀，不额外加奶油。"
        ]
      }
    ],
    dinner: [
      {
        title: "三文鱼糙米毛豆盘",
        reason: "晚餐保留足量碳水和脂肪，帮助恢复但不靠油炸堆热量。",
        items: [["salmon", 170], ["brown_rice", 220], ["edamame", 120], ["cucumber", 120], ["olive_oil", 6]],
        steps: [
          "三文鱼 170g 小火煎熟，注意不要过度煎干。",
          "毛豆仁 120g 焯水 3 分钟，黄瓜 120g 切片。",
          "糙米饭 220g 加热后铺底，放入鱼肉、毛豆和黄瓜。",
          "橄榄油 6g 与醋调成轻酱汁，最后淋上。"
        ]
      },
      {
        title: "豆腐鸡蛋红薯晚餐",
        reason: "动物蛋白和植物蛋白组合，红薯补碳水，晚餐不沉重。",
        items: [["firm_tofu", 180], ["egg", 100], ["sweet_potato", 230], ["spinach", 120], ["olive_oil", 8]],
        steps: [
          "红薯 230g 蒸熟，提前切块可缩短时间。",
          "北豆腐 180g 切块，鸡蛋 100g 打散。",
          "橄榄油 8g 入锅，先煎豆腐，再倒入蛋液凝固。",
          "菠菜 120g 最后加入，翻炒到变软即可出锅。"
        ]
      }
    ]
  },
  shape: {
    breakfast: [
      {
        title: "酸奶奇亚水果碗",
        reason: "蛋白、纤维和水果比例均衡，适合体态管理的轻早餐。",
        items: [["greek_yogurt", 220], ["oats", 45], ["kiwi", 100], ["blueberry", 70], ["chia", 10]],
        steps: [
          "燕麦片 45g 用热水焖软，也可以提前冷藏浸泡。",
          "希腊酸奶 220g 放入碗中，加入燕麦。",
          "猕猴桃 100g 切片，蓝莓 70g 洗净铺面。",
          "撒奇亚籽 10g，静置 3 分钟后食用。"
        ]
      },
      {
        title: "全麦鸡蛋蔬菜开放吐司",
        reason: "比甜面包更稳，蔬菜和蛋白同时补足。",
        items: [["whole_bread", 70], ["egg", 100], ["avocado", 55], ["tomato", 120], ["cucumber", 100]],
        steps: [
          "全麦面包 70g 烤热，牛油果 55g 压泥。",
          "鸡蛋 100g 水煮或煎熟，番茄 120g、黄瓜 100g 切片。",
          "面包抹牛油果泥，放上鸡蛋和番茄。",
          "黄瓜放旁边增加体积，不额外加甜酱。"
        ]
      }
    ],
    lunch: [
      {
        title: "金枪鱼鹰嘴豆沙拉",
        reason: "高蛋白、高纤维，适合想吃清爽但不想饿的午餐。",
        items: [["tuna", 120], ["chickpeas", 120], ["spinach", 100], ["tomato", 140], ["olive_oil", 7]],
        steps: [
          "金枪鱼 120g 沥干，鹰嘴豆 120g 冲洗后沥干。",
          "菠菜 100g 和番茄 140g 洗净切好。",
          "橄榄油 7g、醋、黑胡椒调成酱汁。",
          "所有食材轻拌，盐最后少量添加。"
        ]
      },
      {
        title: "鸡胸红薯西兰花盘",
        reason: "三大营养素分布清楚，适合日常塑型和稳定饱腹。",
        items: [["chicken_breast", 160], ["sweet_potato", 190], ["broccoli", 190], ["bell_pepper", 100], ["olive_oil", 6]],
        steps: [
          "红薯 190g 蒸熟，鸡胸肉 160g 切片。",
          "橄榄油 6g 煎鸡胸肉，煎熟后静置 2 分钟再切。",
          "西兰花 190g 和彩椒 100g 蒸或快炒。",
          "按主食、蛋白、蔬菜分区装盘，酱汁不超过 15g。"
        ]
      }
    ],
    dinner: [
      {
        title: "虾仁豆腐蔬菜汤",
        reason: "晚餐热量温和，蛋白充足，汤类帮助降低重口味需求。",
        items: [["shrimp", 130], ["firm_tofu", 150], ["mushroom", 130], ["spinach", 120], ["brown_rice", 90]],
        steps: [
          "锅中加水煮开，放入蘑菇 130g 和豆腐 150g。",
          "小火煮 4 分钟后加入虾仁 130g。",
          "虾仁变色后加入菠菜 120g，关火前调味。",
          "搭配糙米饭 90g，避免把汤做成高油浓汤。"
        ]
      },
      {
        title: "瘦牛藜麦彩蔬碗",
        reason: "蛋白足、主食不过量，适合晚间还想保持训练恢复的人。",
        items: [["lean_beef", 135], ["quinoa", 145], ["bell_pepper", 120], ["mushroom", 120], ["olive_oil", 6]],
        steps: [
          "瘦牛肉 135g 切薄片，彩椒 120g 和蘑菇 120g 切好。",
          "橄榄油 6g 入锅，先煎牛肉到七成熟。",
          "加入彩椒和蘑菇快速翻炒，牛肉回锅至全熟。",
          "熟藜麦 145g 装碗，放上牛肉和蔬菜。"
        ]
      }
    ]
  }
};

const drinks = [
  { country: "中国", category: "中国茶饮", brand: "康师傅", subBrand: "冰红茶", size: "500ml", sugar: 48.5, kcal: 194, note: "常见标签约 9.7g 糖/100ml", badge: "康师傅", color: "#c43d2f" },
  { country: "中国", category: "中国茶饮", brand: "统一", subBrand: "冰红茶", size: "500ml", sugar: 45.5, kcal: 182, note: "常见标签约 9.1g 糖/100ml", badge: "统一", color: "#d94735" },
  { country: "中国香港", category: "中国茶饮", brand: "维他", subBrand: "柠檬茶", size: "250ml", sugar: 34, kcal: 135, note: "常见标签约 13.6g 糖/100ml", badge: "VITA", color: "#d93b28" },
  { country: "中国", category: "中国茶饮", brand: "农夫山泉", subBrand: "茶π 柠檬红茶", size: "500ml", sugar: 42, kcal: 168, note: "不同口味标签会变化", badge: "茶π", color: "#de8b2f" },
  { country: "中国", category: "低糖/无糖", brand: "元气森林", subBrand: "白桃气泡水", size: "480ml", sugar: 0, kcal: 0, note: "0 糖产品仍应看甜味剂和总能量", badge: "元气", color: "#61a6a3" },
  { country: "美国", category: "碳酸汽水", brand: "Coca-Cola", subBrand: "Original Taste", size: "12 fl oz / 355ml", sugar: 39, kcal: 140, note: "美国 12 oz 罐常见标签", badge: "Coke", color: "#c62828" },
  { country: "美国", category: "碳酸汽水", brand: "Pepsi", subBrand: "Cola", size: "12 fl oz / 355ml", sugar: 41, kcal: 150, note: "美国常见 12 oz 罐标签", badge: "Pepsi", color: "#2256a5" },
  { country: "美国", category: "碳酸汽水", brand: "Sprite", subBrand: "Lemon-Lime", size: "12 fl oz / 355ml", sugar: 38, kcal: 140, note: "美国常见 12 oz 罐标签", badge: "Sprite", color: "#229c5b" },
  { country: "美国", category: "碳酸汽水", brand: "Fanta", subBrand: "Orange", size: "12 fl oz / 355ml", sugar: 44, kcal: 160, note: "美国常见 12 oz 罐标签", badge: "Fanta", color: "#ef7d22" },
  { country: "美国", category: "碳酸汽水", brand: "Mountain Dew", subBrand: "Original", size: "12 fl oz / 355ml", sugar: 46, kcal: 170, note: "含咖啡因，糖量较高", badge: "Mtn Dew", color: "#76a829" },
  { country: "美国", category: "碳酸汽水", brand: "Dr Pepper", subBrand: "Original", size: "12 fl oz / 355ml", sugar: 40, kcal: 150, note: "美国常见 12 oz 罐标签", badge: "Dr P", color: "#6f2435" },
  { country: "美国", category: "能量/运动", brand: "Red Bull", subBrand: "Energy Drink", size: "8.4 fl oz / 250ml", sugar: 27, kcal: 110, note: "含咖啡因 80mg", badge: "Red Bull", color: "#284c87" },
  { country: "美国", category: "能量/运动", brand: "Monster", subBrand: "Original Green", size: "16 fl oz / 473ml", sugar: 54, kcal: 210, note: "大罐装糖量容易被低估", badge: "Monster", color: "#1f7d3a" },
  { country: "美国", category: "能量/运动", brand: "Gatorade", subBrand: "Fruit Punch", size: "20 fl oz / 591ml", sugar: 34, kcal: 140, note: "运动饮料不等于日常水替代品", badge: "Gatorade", color: "#ed5d36" },
  { country: "美国", category: "中国茶饮", brand: "AriZona", subBrand: "Green Tea", size: "23 fl oz / 680ml", sugar: 51, kcal: 210, note: "大瓶茶饮糖量接近两天女性建议上限", badge: "AriZona", color: "#58a16f" },
  { country: "美国", category: "咖啡奶饮", brand: "Starbucks", subBrand: "Mocha Frappuccino", size: "Grande 16 fl oz / 473ml", sugar: 51, kcal: 370, note: "门店标准配方，定制会改变糖量", badge: "Starbucks", color: "#177245" },
  { country: "美国", category: "咖啡奶饮", brand: "Starbucks", subBrand: "Caramel Macchiato", size: "Grande 16 fl oz / 473ml", sugar: 33, kcal: 250, note: "糖主要来自糖浆和焦糖酱", badge: "Starbucks", color: "#8b5f3c" },
  { country: "英国", category: "碳酸汽水", brand: "Coca-Cola", subBrand: "Original Taste", size: "500ml", sugar: 53, kcal: 210, note: "英国标签约 10.6g 糖/100ml", badge: "Coke UK", color: "#b91c1c" },
  { country: "欧洲", category: "果味/果汁茶", brand: "Fuze Tea", subBrand: "Lemon Black Tea", size: "500ml", sugar: 22, kcal: 88, note: "低于传统冰红茶但仍含添加糖", badge: "Fuze", color: "#b57722" },
  { country: "欧洲", category: "果味/果汁茶", brand: "Lipton", subBrand: "Ice Tea Lemon", size: "500ml", sugar: 22.5, kcal: 90, note: "不同国家配方差异较大", badge: "Lipton", color: "#dca629" },
  { country: "法国", category: "碳酸汽水", brand: "Orangina", subBrand: "Original", size: "330ml", sugar: 32, kcal: 139, note: "果汁汽水也可能含较多糖", badge: "Orangina", color: "#f38b22" },
  { country: "英国", category: "能量/运动", brand: "Lucozade", subBrand: "Energy Original", size: "380ml", sugar: 17, kcal: 133, note: "英国配方降糖后仍需看标签", badge: "Lucozade", color: "#f28b24" },
  { country: "日本", category: "能量/运动", brand: "Pocari Sweat", subBrand: "Ion Supply Drink", size: "500ml", sugar: 31, kcal: 125, note: "电解质饮料不是无糖水", badge: "Pocari", color: "#2c6fb7" },
  { country: "日本", category: "咖啡奶饮", brand: "Calpis", subBrand: "Calpis Water", size: "500ml", sugar: 55, kcal: 230, note: "乳酸风味饮料糖量通常较高", badge: "Calpis", color: "#5e8ac7" },
  { country: "日本", category: "中国茶饮", brand: "Kirin", subBrand: "午後の紅茶 Lemon Tea", size: "500ml", sugar: 35, kcal: 140, note: "柠檬红茶类需特别看糖", badge: "Kirin", color: "#b83931" },
  { country: "韩国", category: "咖啡奶饮", brand: "Binggrae", subBrand: "Banana Flavored Milk", size: "200ml", sugar: 27, kcal: 208, note: "小盒装也可能接近 7 颗方糖", badge: "Binggrae", color: "#f1c54d" },
  { country: "韩国", category: "碳酸汽水", brand: "Lotte", subBrand: "Milkis", size: "250ml", sugar: 27, kcal: 130, note: "乳味汽水含糖量不可忽视", badge: "Milkis", color: "#54a1c8" },
  { country: "泰国", category: "中国茶饮", brand: "Oishi", subBrand: "Honey Lemon Green Tea", size: "500ml", sugar: 44, kcal: 176, note: "蜂蜜柠檬口味常见高糖", badge: "Oishi", color: "#6aa540" },
  { country: "印度", category: "碳酸汽水", brand: "Thums Up", subBrand: "Cola", size: "300ml", sugar: 32, kcal: 128, note: "常见小瓶也超过 25g 糖", badge: "Thums", color: "#2d2f3a" },
  { country: "印度", category: "果味/果汁茶", brand: "Maaza", subBrand: "Mango", size: "600ml", sugar: 72, kcal: 288, note: "果味饮料需区分水果和添加糖", badge: "Maaza", color: "#e6a126" },
  { country: "巴西", category: "碳酸汽水", brand: "Guaraná Antarctica", subBrand: "Original", size: "350ml", sugar: 36, kcal: 140, note: "巴西常见瓜拉纳汽水", badge: "Guaraná", color: "#2f8f55" },
  { country: "墨西哥", category: "碳酸汽水", brand: "Jarritos", subBrand: "Mandarin", size: "370ml", sugar: 41, kcal: 160, note: "玻璃瓶果味汽水糖量偏高", badge: "Jarritos", color: "#ec7d26" },
  { country: "澳大利亚", category: "果味/果汁茶", brand: "Bundaberg", subBrand: "Ginger Beer", size: "375ml", sugar: 40, kcal: 170, note: "姜汁啤酒多为无酒精甜饮", badge: "Bundaberg", color: "#b1712b" },
  { country: "全球", category: "低糖/无糖", brand: "Coca-Cola", subBrand: "Zero Sugar", size: "355ml", sugar: 0, kcal: 0, note: "无糖不等于适合无限量饮用", badge: "Zero", color: "#111827" },
  { country: "全球", category: "低糖/无糖", brand: "Pepsi", subBrand: "Zero Sugar", size: "355ml", sugar: 0, kcal: 0, note: "用甜味剂替代糖，仍建议以水为主", badge: "Pepsi 0", color: "#263b8f" }
];

const foodAnalysisItems = [
  { id: "zero_cola", name: "无糖可乐", serving: "1罐 / 355ml", servingGram: 355, kcal: 0, sugar: 0, protein: 0, fat: 0, sodium: 40, aliases: ["无糖可乐", "无糖可口可乐", "零糖可乐", "零糖可口可乐", "0糖可乐", "零度可乐", "零度", "可乐zero", "可乐 zero", "可口可乐zero", "可口可乐 zero", "coke zero", "zero coke", "coca cola zero", "zero sugar cola", "diet coke"] },
  { id: "zero_pepsi", name: "无糖百事", serving: "1罐 / 355ml", servingGram: 355, kcal: 0, sugar: 0, protein: 0, fat: 0, sodium: 35, aliases: ["无糖百事", "零糖百事", "百事 zero", "百事无糖", "pepsi zero", "diet pepsi"] },
  { id: "cola", name: "可乐", serving: "1罐 / 355ml", servingGram: 355, kcal: 140, sugar: 39, protein: 0, fat: 0, sodium: 45, aliases: ["可乐", "可口可乐", "coca", "coke", "cola"] },
  { id: "pepsi", name: "百事可乐", serving: "1罐 / 355ml", servingGram: 355, kcal: 150, sugar: 41, protein: 0, fat: 0, sodium: 30, aliases: ["百事", "百事可乐", "pepsi"] },
  { id: "sweet_tea", name: "冰红茶", serving: "1瓶 / 500ml", servingGram: 500, kcal: 190, sugar: 46, protein: 0, fat: 0, sodium: 60, aliases: ["冰红茶", "柠檬茶", "甜茶"] },
  { id: "milk_tea", name: "奶茶", serving: "1杯 / 500ml", servingGram: 500, kcal: 420, sugar: 55, protein: 6, fat: 13, sodium: 220, aliases: ["奶茶", "珍珠奶茶", "波霸奶茶", "bubble tea"] },
  { id: "frappuccino", name: "星冰乐/甜咖啡", serving: "1杯 / 473ml", servingGram: 473, kcal: 370, sugar: 51, protein: 5, fat: 15, sodium: 240, aliases: ["星冰乐", "甜咖啡", "摩卡星冰乐", "frappuccino"] },
  { id: "latte_sweet", name: "加糖拿铁", serving: "1杯 / 355ml", servingGram: 355, kcal: 220, sugar: 22, protein: 10, fat: 7, sodium: 150, aliases: ["加糖拿铁", "拿铁", "latte"] },
  { id: "americano", name: "美式咖啡", serving: "1杯 / 355ml", servingGram: 355, kcal: 10, sugar: 0, protein: 1, fat: 0, sodium: 10, aliases: ["美式", "美式咖啡", "americano", "黑咖啡"] },
  { id: "orange_juice", name: "橙汁", serving: "1杯 / 300ml", servingGram: 300, kcal: 135, sugar: 27, protein: 2, fat: 0, sodium: 5, aliases: ["橙汁", "果汁", "orange juice"] },
  { id: "energy_drink", name: "能量饮料", serving: "1罐 / 250ml", servingGram: 250, kcal: 110, sugar: 27, protein: 0, fat: 0, sodium: 105, aliases: ["红牛", "能量饮料", "energy drink"] },

  { id: "fried_chicken", name: "炸鸡", serving: "1块 / 160g", servingGram: 160, kcal: 390, sugar: 1, protein: 28, fat: 24, sodium: 900, aliases: ["炸鸡", "炸鸡腿", "炸鸡块", "fried chicken"] },
  { id: "hamburger", name: "汉堡", serving: "1个 / 220g", servingGram: 220, kcal: 540, sugar: 9, protein: 25, fat: 27, sodium: 1050, aliases: ["汉堡", "汉堡包", "burger", "hamburger"] },
  { id: "fries", name: "薯条", serving: "1中份 / 120g", servingGram: 120, kcal: 365, sugar: 0, protein: 4, fat: 17, sodium: 280, aliases: ["薯条", "炸薯条", "fries"] },
  { id: "pizza", name: "披萨", serving: "2片 / 220g", servingGram: 220, kcal: 560, sugar: 8, protein: 24, fat: 22, sodium: 1200, aliases: ["披萨", "pizza"] },
  { id: "hotdog", name: "热狗", serving: "1个 / 150g", servingGram: 150, kcal: 330, sugar: 5, protein: 13, fat: 18, sodium: 900, aliases: ["热狗", "hot dog"] },
  { id: "instant_noodles", name: "泡面", serving: "1包 / 100g", servingGram: 100, kcal: 470, sugar: 5, protein: 9, fat: 19, sodium: 1700, aliases: ["泡面", "方便面", "拉面杯", "instant noodles"] },
  { id: "fried_rice", name: "炒饭", serving: "1碗 / 350g", servingGram: 350, kcal: 620, sugar: 4, protein: 18, fat: 20, sodium: 900, aliases: ["炒饭", "蛋炒饭", "fried rice"] },
  { id: "donut", name: "甜甜圈", serving: "1个 / 70g", servingGram: 70, kcal: 270, sugar: 15, protein: 4, fat: 14, sodium: 260, aliases: ["甜甜圈", "donut", "doughnut"] },
  { id: "chips", name: "薯片", serving: "1包 / 50g", servingGram: 50, kcal: 270, sugar: 1, protein: 3, fat: 17, sodium: 300, aliases: ["薯片", "chips"] },
  { id: "ice_cream", name: "冰淇淋", serving: "1杯 / 120g", servingGram: 120, kcal: 250, sugar: 28, protein: 4, fat: 14, sodium: 90, aliases: ["冰淇淋", "雪糕", "ice cream"] },
  { id: "cake", name: "蛋糕", serving: "1块 / 100g", servingGram: 100, kcal: 360, sugar: 32, protein: 5, fat: 16, sodium: 300, aliases: ["蛋糕", "cake"] },

  { id: "white_rice_meal", name: "白米饭", serving: "1碗 / 150g", servingGram: 150, kcal: 195, sugar: 0, protein: 3.6, fat: 0.4, sodium: 2, aliases: ["米饭", "白米饭", "白饭"] },
  { id: "chicken_breast_meal", name: "鸡胸肉", serving: "1份 / 150g", servingGram: 150, kcal: 248, sugar: 0, protein: 46.5, fat: 5.4, sodium: 110, aliases: ["鸡胸肉", "鸡胸", "水煮鸡胸"] },
  { id: "egg_meal", name: "鸡蛋", serving: "1个 / 50g", servingGram: 50, kcal: 72, sugar: 0, protein: 6.3, fat: 4.8, sodium: 70, aliases: ["鸡蛋", "水煮蛋", "煎蛋"] },
  { id: "salad_meal", name: "蔬菜沙拉", serving: "1份 / 250g", servingGram: 250, kcal: 180, sugar: 6, protein: 5, fat: 9, sodium: 260, aliases: ["沙拉", "蔬菜沙拉", "salad"] },
  { id: "broccoli_meal", name: "西兰花", serving: "1份 / 180g", servingGram: 180, kcal: 61, sugar: 3, protein: 5, fat: 1, sodium: 60, aliases: ["西兰花", "青花菜"] },
  { id: "apple_meal", name: "苹果", serving: "1个 / 150g", servingGram: 150, kcal: 78, sugar: 15, protein: 0.4, fat: 0.3, sodium: 2, aliases: ["苹果"] },
  { id: "banana_meal", name: "香蕉", serving: "1根 / 100g", servingGram: 100, kcal: 89, sugar: 12, protein: 1.1, fat: 0.3, sodium: 1, aliases: ["香蕉"] },
  { id: "yogurt_unsweetened", name: "无糖酸奶", serving: "1杯 / 180g", servingGram: 180, kcal: 106, sugar: 6, protein: 18, fat: 1, sodium: 65, aliases: ["无糖酸奶", "希腊酸奶"] },
  { id: "oatmeal_meal", name: "燕麦", serving: "1碗 / 50g干重", servingGram: 50, kcal: 195, sugar: 1, protein: 8.5, fat: 3.5, sodium: 2, aliases: ["燕麦", "燕麦片"] },
  { id: "ramen", name: "拉面", serving: "1碗 / 550g", servingGram: 550, kcal: 620, sugar: 8, protein: 24, fat: 22, sodium: 2100, aliases: ["拉面", "日式拉面", "ramen"] },
  { id: "hotpot", name: "火锅", serving: "1餐 / 650g", servingGram: 650, kcal: 850, sugar: 6, protein: 45, fat: 55, sodium: 2600, aliases: ["火锅", "麻辣烫", "冒菜"] },
  { id: "bbq", name: "烧烤", serving: "1餐 / 350g", servingGram: 350, kcal: 780, sugar: 12, protein: 42, fat: 48, sodium: 1800, aliases: ["烧烤", "烤串", "bbq"] },
  { id: "dumplings", name: "煎饺/锅贴", serving: "8个 / 220g", servingGram: 220, kcal: 520, sugar: 5, protein: 20, fat: 24, sodium: 1050, aliases: ["煎饺", "锅贴", "饺子"] },
  { id: "sushi", name: "寿司", serving: "8件 / 240g", servingGram: 240, kcal: 360, sugar: 8, protein: 17, fat: 6, sodium: 780, aliases: ["寿司", "sushi"] },
  { id: "sandwich", name: "三明治", serving: "1份 / 220g", servingGram: 220, kcal: 430, sugar: 7, protein: 24, fat: 15, sodium: 900, aliases: ["三明治", "sandwich"] },
  { id: "protein_shake", name: "蛋白奶昔", serving: "1杯 / 350ml", servingGram: 350, kcal: 210, sugar: 5, protein: 30, fat: 4, sodium: 220, aliases: ["蛋白奶昔", "蛋白粉", "protein shake"] },
  { id: "salmon_meal", name: "三文鱼", serving: "1份 / 150g", servingGram: 150, kcal: 312, sugar: 0, protein: 33, fat: 19, sodium: 90, aliases: ["三文鱼", "鲑鱼", "salmon"] },
  { id: "tofu_meal", name: "豆腐", serving: "1份 / 180g", servingGram: 180, kcal: 259, sugar: 1, protein: 31, fat: 16, sodium: 25, aliases: ["豆腐", "老豆腐", "北豆腐"] },
  { id: "vegetable_soup", name: "蔬菜汤", serving: "1碗 / 350g", servingGram: 350, kcal: 120, sugar: 7, protein: 5, fat: 3, sodium: 420, aliases: ["蔬菜汤", "清汤", "菜汤"] }
];

const foodAnalysisAliasEntries = foodAnalysisItems
  .flatMap((item) => item.aliases.map((alias) => ({ alias, id: item.id })))
  .sort((a, b) => b.alias.length - a.alias.length);
const foodAnalysisById = Object.fromEntries(foodAnalysisItems.map((item) => [item.id, item]));
const zeroSugarBlockedAnalysisIds = new Set(["cola", "pepsi", "sweet_tea", "milk_tea", "latte_sweet", "frappuccino", "energy_drink"]);
const openFoodFactsFields = "code,product_name,brands,nutriments,serving_quantity,serving_size,quantity,nutrition_grades,image_front_url";

const CALENDAR_STORAGE_KEY = "honglinhealth.calendar.records.v1";
const WELCOME_STORAGE_KEY = "honglinhealth.welcome.seen.v1";

const state = {
  goal: "fatLoss",
  currentMeals: [],
  recentRecipeTitles: [],
  customDishCounter: 0,
  lastAnalysis: null,
  rankMode: "menu",
  basket: [],
  category: "全部",
  search: "",
  drinkCategory: "全部",
  drinkSearch: "",
  selectedPanel: "day-menu",
  photoVisionText: "",
  photoFileName: "",
  photoOnlineProducts: [],
  selectedDate: localDateString(),
  visibleMonth: localDateString().slice(0, 7),
  calendarRecords: loadCalendarRecords()
};

const ingredientById = Object.fromEntries(ingredients.map((item) => [item.id, item]));
const aliasEntries = ingredients.flatMap((item) => item.aliases.map((alias) => ({ alias, id: item.id }))).sort((a, b) => b.alias.length - a.alias.length);
const ingredientAnalysisCache = new Map();
const analysisIngredientBridge = {
  white_rice_meal: "white_rice",
  chicken_breast_meal: "chicken_breast",
  egg_meal: "egg",
  broccoli_meal: "broccoli",
  apple_meal: "apple",
  banana_meal: "banana",
  yogurt_unsweetened: "greek_yogurt",
  oatmeal_meal: "oats",
  salmon_meal: "salmon",
  tofu_meal: "firm_tofu",
  vegetable_soup: "vegetable_soup"
};
const ingredientSugarPer100 = {
  apple: 10.4,
  banana: 12.2,
  blueberry: 10,
  orange: 9.4,
  kiwi: 9,
  strawberry: 4.9,
  pear: 9.8,
  grapes: 15.5,
  grapefruit: 6.9,
  mango: 13.7,
  dragon_fruit: 7.7,
  peach: 8.4,
  watermelon: 6.2,
  pineapple: 9.9,
  papaya: 7.8,
  pomegranate: 13.7,
  milk_lowfat: 5,
  greek_yogurt: 3.6,
  cottage_cheese: 2.7,
  soy_milk_unsweetened: 0.8
};
const ingredientSodiumPer100 = {
  egg: 140,
  egg_white: 166,
  quail_egg: 141,
  milk_lowfat: 44,
  greek_yogurt: 36,
  cottage_cheese: 364,
  firm_tofu: 14,
  silken_tofu: 8,
  tempeh: 9,
  soy_milk_unsweetened: 35,
  chicken_breast: 74,
  chicken_thigh_skinless: 87,
  turkey_breast: 63,
  lean_beef: 72,
  beef_shank: 68,
  pork_tenderloin: 62,
  lean_lamb: 72,
  duck_breast_skinless: 65,
  salmon: 59,
  tuna: 247,
  cod: 54,
  mackerel: 90,
  sardines: 300,
  shrimp: 111,
  scallop: 392,
  squid: 44,
  crab: 395,
  mussels: 369,
  seitan: 380,
  tofu_skin: 12
};
const safeSingleCharacterIngredientAliases = new Set(["虾", "梨", "橙", "蛋"]);
const photoKeywordHints = [
  { keywords: ["zero cola", "coke zero", "cola zero", "zero sugar", "diet coke", "无糖可乐", "零糖可乐", "零度可乐"], text: "无糖可乐 1罐", label: "无糖可乐" },
  { keywords: ["zero pepsi", "pepsi zero", "无糖百事", "零糖百事"], text: "无糖百事 1罐", label: "无糖百事" },
  { keywords: ["cola", "coke", "可乐", "可口可乐"], text: "可乐 1罐", label: "可乐" },
  { keywords: ["milk tea", "bubble tea", "奶茶"], text: "奶茶 1杯", label: "奶茶" },
  { keywords: ["steak", "beef", "牛排", "牛肉"], text: "牛排 180g", label: "牛排" },
  { keywords: ["rice", "米饭", "白饭"], text: "米饭 150g", label: "米饭" },
  { keywords: ["broccoli", "西兰花", "青花菜"], text: "西兰花 150g", label: "西兰花" },
  { keywords: ["chicken breast", "鸡胸", "鸡胸肉"], text: "鸡胸肉 150g", label: "鸡胸肉" },
  { keywords: ["fried chicken", "炸鸡"], text: "炸鸡 1块", label: "炸鸡" },
  { keywords: ["burger", "hamburger", "汉堡"], text: "汉堡 1个", label: "汉堡" },
  { keywords: ["egg", "鸡蛋", "水煮蛋"], text: "鸡蛋 1个", label: "鸡蛋" },
  { keywords: ["salmon", "三文鱼", "鲑鱼"], text: "三文鱼 150g", label: "三文鱼" },
  { keywords: ["tofu", "豆腐"], text: "豆腐 180g", label: "豆腐" },
  { keywords: ["shrimp", "prawn", "虾"], text: "虾仁 150g", label: "虾仁" },
  { keywords: ["salad", "沙拉"], text: "蔬菜沙拉 1份", label: "蔬菜沙拉" },
  { keywords: ["pizza", "披萨"], text: "披萨 2片", label: "披萨" },
  { keywords: ["fries", "薯条"], text: "薯条 1份", label: "薯条" },
  { keywords: ["noodle", "ramen", "拉面", "泡面"], text: "拉面 1碗", label: "面类" }
];
const proteinCategoryNames = ["肉禽鱼蛋", "豆乳蛋白"];
const carbCategoryNames = ["全谷主食", "主食"];

const recipeSeedList = [
  { goals: ["fatLoss", "shape"], meal: "breakfast", title: "鳕鱼小米暖粥", technique: "粥", reason: "清淡鱼肉配小米粥，早餐温和、蛋白充足。", items: [["millet_porridge", 260], ["cod", 90], ["bok_choy", 90], ["egg", 50], ["sesame_seeds", 4]] },
  { goals: ["muscle", "shape"], meal: "breakfast", title: "火鸡胸全麦开放吐司", technique: "吐司", reason: "火鸡胸和全麦面包组合，适合需要高蛋白的早晨。", items: [["whole_bread", 85], ["turkey_breast", 100], ["egg", 60], ["tomato", 100], ["avocado", 40]] },
  { goals: ["fatLoss"], meal: "breakfast", title: "无糖豆浆燕麦豆腐碗", technique: "碗", reason: "豆浆、燕麦和嫩豆腐提供植物蛋白，整体低油。", items: [["soy_milk_unsweetened", 260], ["oats", 42], ["silken_tofu", 120], ["strawberry", 100], ["chia", 8]] },
  { goals: ["shape"], meal: "breakfast", title: "荞麦面鸡蛋早餐汤", technique: "汤面", reason: "荞麦面比甜面包更稳，鸡蛋和小白菜补蛋白与蔬菜。", items: [["buckwheat_noodles", 145], ["egg", 80], ["bok_choy", 120], ["mushroom", 80], ["sesame_seeds", 4]] },
  { goals: ["muscle"], meal: "breakfast", title: "牛奶香蕉藜麦早餐碗", technique: "碗", reason: "训练日早餐增加主食和蛋白，能量更足。", items: [["milk_lowfat", 300], ["quinoa", 160], ["banana", 120], ["almonds", 18], ["greek_yogurt", 120]] },
  { goals: ["fatLoss", "shape"], meal: "breakfast", title: "鸡蛋芦笋土豆小煎盘", technique: "煎", reason: "土豆控制份量，配鸡蛋和芦笋提高饱腹。", items: [["egg", 100], ["potato", 120], ["asparagus", 120], ["tomato", 100], ["olive_oil", 5]] },
  { goals: ["muscle"], meal: "breakfast", title: "猪里脊玉米鸡蛋盘", technique: "煎", reason: "瘦猪肉与鸡蛋补足蛋白，玉米提供训练碳水。", items: [["pork_tenderloin", 120], ["corn", 180], ["egg", 100], ["spinach", 80], ["olive_oil", 7]] },
  { goals: ["shape"], meal: "breakfast", title: "希腊酸奶芒果奇亚杯", technique: "冷拌", reason: "像甜品但不额外加糖，用酸奶和水果控制口味。", items: [["greek_yogurt", 220], ["mango", 90], ["oats", 35], ["chia", 10], ["walnut", 8]] },
  { goals: ["fatLoss"], meal: "breakfast", title: "蛋清蘑菇菠菜卷", technique: "卷", reason: "蛋清和蔬菜体积大、热量温和，适合减脂早餐。", items: [["egg_white", 150], ["mushroom", 100], ["spinach", 100], ["whole_bread", 45], ["olive_oil", 4]] },
  { goals: ["muscle", "shape"], meal: "breakfast", title: "黑豆鸡蛋糙米早餐碗", technique: "饭碗", reason: "黑豆和鸡蛋组合，适合不想吃甜早餐的人。", items: [["brown_rice", 150], ["black_beans", 110], ["egg", 100], ["tomato", 110], ["avocado", 35]] },
  { goals: ["fatLoss", "shape"], meal: "breakfast", title: "海带豆腐蛋花汤早餐", technique: "汤", reason: "汤类早餐清爽，豆腐和鸡蛋补蛋白。", items: [["seaweed", 70], ["silken_tofu", 180], ["egg", 70], ["whole_bread", 45], ["bok_choy", 90]] },
  { goals: ["muscle"], meal: "breakfast", title: "全麦鸡腿肉早餐卷", technique: "卷", reason: "去皮鸡腿肉口感更好，配全麦面包避免过油。", items: [["whole_bread", 90], ["chicken_thigh_skinless", 120], ["lettuce", 80], ["tomato", 100], ["greek_yogurt", 80]] },
  { goals: ["shape"], meal: "breakfast", title: "南瓜豆浆燕麦糊", technique: "糊", reason: "南瓜和燕麦带来天然甜味，减少想喝甜饮的冲动。", items: [["pumpkin", 180], ["soy_milk_unsweetened", 260], ["oats", 40], ["chia", 8], ["egg", 60]] },
  { goals: ["fatLoss"], meal: "breakfast", title: "草莓梨酸奶燕麦碗", technique: "冷拌", reason: "用低糖水果搭配无糖酸奶，纤维和蛋白都在线。", items: [["greek_yogurt", 220], ["strawberry", 120], ["pear", 80], ["oats", 30], ["chia", 8]] },
  { goals: ["muscle"], meal: "breakfast", title: "金枪鱼玉米开放吐司", technique: "吐司", reason: "咸口早餐，高蛋白且准备速度快。", items: [["whole_bread", 95], ["tuna", 120], ["corn", 130], ["cucumber", 90], ["olive_oil", 5]] },
  { goals: ["shape"], meal: "breakfast", title: "藜麦青豆鸡蛋杯", technique: "蒸", reason: "像咸味蛋杯，适合提前备餐。", items: [["quinoa", 140], ["peas", 90], ["egg", 100], ["spinach", 80], ["olive_oil", 4]] },
  { goals: ["fatLoss", "shape"], meal: "breakfast", title: "番茄蛋清荞麦汤", technique: "汤面", reason: "番茄汤底提高风味，不靠重油。", items: [["buckwheat_noodles", 120], ["egg_white", 130], ["tomato", 180], ["bok_choy", 100], ["sesame_seeds", 3]] },
  { goals: ["muscle"], meal: "breakfast", title: "茅屋奶酪葡萄燕麦盘", technique: "冷拌", reason: "高蛋白奶酪配燕麦，适合快速补能。", items: [["cottage_cheese", 180], ["oats", 60], ["grapes", 100], ["almonds", 18], ["milk_lowfat", 160]] },
  { goals: ["fatLoss"], meal: "breakfast", title: "虾仁小白菜蛋花粥", technique: "粥", reason: "虾仁低脂，粥类温和但不寡淡。", items: [["millet_porridge", 250], ["shrimp", 100], ["bok_choy", 130], ["egg", 50], ["sesame_seeds", 3]] },
  { goals: ["shape", "muscle"], meal: "breakfast", title: "天贝番茄全麦早餐盘", technique: "煎", reason: "发酵豆制品带来植物蛋白，搭配番茄更清爽。", items: [["tempeh", 100], ["whole_bread", 75], ["tomato", 140], ["spinach", 80], ["olive_oil", 6]] },
  { goals: ["fatLoss", "shape"], meal: "breakfast", title: "西柚鸡蛋牛油果盘", technique: "拼盘", reason: "清爽水果配鸡蛋和少量健康脂肪。", items: [["grapefruit", 160], ["egg", 100], ["avocado", 45], ["lettuce", 80], ["whole_bread", 45]] },
  { goals: ["muscle"], meal: "breakfast", title: "鸡胸南瓜糙米早餐碗", technique: "饭碗", reason: "咸口高蛋白早餐，适合早训后。", items: [["chicken_breast", 130], ["brown_rice", 150], ["pumpkin", 150], ["spinach", 90], ["olive_oil", 6]] },
  { goals: ["fatLoss"], meal: "breakfast", title: "低脂牛奶蓝莓奇亚燕麦", technique: "隔夜燕麦", reason: "提前备好，减少早上买甜饮和甜面包。", items: [["milk_lowfat", 240], ["oats", 38], ["blueberry", 100], ["chia", 10], ["egg_white", 100]] },
  { goals: ["shape"], meal: "breakfast", title: "豆腐蘑菇全麦小锅", technique: "炖", reason: "早餐也可以吃热菜，蛋白和蔬菜更均衡。", items: [["firm_tofu", 150], ["mushroom", 120], ["whole_bread", 55], ["tomato", 120], ["olive_oil", 5]] },
  { goals: ["muscle", "shape"], meal: "breakfast", title: "青豆鸡蛋土豆饼", technique: "煎", reason: "不是甜早餐，主食和蛋白组合扎实。", items: [["potato", 180], ["peas", 90], ["egg", 110], ["cottage_cheese", 80], ["olive_oil", 7]] },
  { goals: ["fatLoss"], meal: "breakfast", title: "羽衣甘蓝蛋清豆浆碗", technique: "炒", reason: "高蛋白低油，绿叶菜份量充足。", items: [["egg_white", 160], ["kale", 90], ["soy_milk_unsweetened", 220], ["whole_bread", 40], ["olive_oil", 4]] },
  { goals: ["shape"], meal: "breakfast", title: "苹果核桃酸奶杯", technique: "冷拌", reason: "甜味来自水果，核桃严格控量。", items: [["greek_yogurt", 210], ["apple", 130], ["walnut", 10], ["oats", 35], ["chia", 6]] },

  { goals: ["fatLoss"], meal: "lunch", title: "鳕鱼花椰菜糙米盘", technique: "蒸", reason: "鳕鱼低脂高蛋白，花椰菜体积大，适合减脂午餐。", items: [["cod", 170], ["cauliflower", 200], ["brown_rice", 120], ["bell_pepper", 100], ["olive_oil", 6]] },
  { goals: ["muscle"], meal: "lunch", title: "火鸡胸藜麦黑豆碗", technique: "饭碗", reason: "动物蛋白、豆类和藜麦叠加，训练日很稳。", items: [["turkey_breast", 190], ["quinoa", 210], ["black_beans", 120], ["tomato", 130], ["olive_oil", 8]] },
  { goals: ["shape"], meal: "lunch", title: "青花鱼南瓜小白菜盘", technique: "煎", reason: "青花鱼提供脂肪酸，南瓜和小白菜让整餐不腻。", items: [["mackerel", 125], ["pumpkin", 180], ["bok_choy", 180], ["mushroom", 100], ["olive_oil", 5]] },
  { goals: ["fatLoss", "shape"], meal: "lunch", title: "虾仁荞麦冷面", technique: "凉面", reason: "清爽但不是沙拉，虾仁和荞麦面组合热量可控。", items: [["shrimp", 150], ["buckwheat_noodles", 180], ["cucumber", 120], ["carrot", 80], ["sesame_seeds", 5]] },
  { goals: ["muscle"], meal: "lunch", title: "瘦牛土豆芦笋热盘", technique: "煎", reason: "瘦牛补铁和蛋白，土豆提供稳定碳水。", items: [["lean_beef", 180], ["potato", 230], ["asparagus", 140], ["onion", 80], ["olive_oil", 8]] },
  { goals: ["fatLoss"], meal: "lunch", title: "猪里脊白菜豆腐汤", technique: "汤", reason: "汤菜组合体积大，适合少油午餐。", items: [["pork_tenderloin", 140], ["firm_tofu", 130], ["napa_cabbage", 220], ["mushroom", 120], ["brown_rice", 90]] },
  { goals: ["shape"], meal: "lunch", title: "鸡腿肉库斯库斯彩椒碗", technique: "饭碗", reason: "去皮鸡腿比鸡胸更有口感，仍能保持健康。", items: [["chicken_thigh_skinless", 150], ["couscous", 170], ["bell_pepper", 130], ["zucchini", 140], ["olive_oil", 7]] },
  { goals: ["muscle"], meal: "lunch", title: "三文鱼大麦毛豆碗", technique: "烤", reason: "优质脂肪、全谷和豆类搭配，恢复友好。", items: [["salmon", 170], ["barley", 180], ["edamame", 130], ["broccoli", 170], ["olive_oil", 7]] },
  { goals: ["fatLoss", "shape"], meal: "lunch", title: "天贝四季豆荞麦饭", technique: "炒", reason: "植物蛋白主菜，四季豆增加纤维和咀嚼感。", items: [["tempeh", 120], ["green_beans", 180], ["buckwheat_noodles", 130], ["onion", 70], ["olive_oil", 6]] },
  { goals: ["muscle"], meal: "lunch", title: "鸡胸红腰豆玉米碗", technique: "饭碗", reason: "鸡胸和豆类提高蛋白，玉米让午餐更有满足感。", items: [["chicken_breast", 190], ["kidney_beans", 130], ["corn", 170], ["lettuce", 100], ["avocado", 50]] },
  { goals: ["shape"], meal: "lunch", title: "沙丁鱼番茄全麦意面", technique: "面", reason: "用沙丁鱼做意面，避开奶油重酱。", items: [["sardines", 100], ["whole_pasta", 190], ["tomato", 180], ["spinach", 100], ["olive_oil", 5]] },
  { goals: ["fatLoss"], meal: "lunch", title: "扇贝芦笋花椰菜碗", technique: "蒸", reason: "扇贝低脂，花椰菜和芦笋让盘子清爽。", items: [["scallop", 150], ["asparagus", 140], ["cauliflower", 200], ["quinoa", 110], ["olive_oil", 5]] },
  { goals: ["muscle", "shape"], meal: "lunch", title: "牛肉黑豆糙米墨西哥碗", technique: "饭碗", reason: "高蛋白高纤维，口味不单调。", items: [["lean_beef", 160], ["black_beans", 130], ["brown_rice", 170], ["tomato", 120], ["lettuce", 100]] },
  { goals: ["fatLoss"], meal: "lunch", title: "嫩豆腐海带虾仁汤饭", technique: "汤饭", reason: "海带和豆腐降低油腻感，虾仁补蛋白。", items: [["silken_tofu", 180], ["seaweed", 80], ["shrimp", 130], ["white_rice", 90], ["bok_choy", 130]] },
  { goals: ["shape"], meal: "lunch", title: "鸡胸茄子番茄炖锅", technique: "炖", reason: "茄子不用重油也能好吃，番茄自然成酱。", items: [["chicken_breast", 160], ["eggplant", 180], ["tomato", 180], ["onion", 80], ["brown_rice", 120]] },
  { goals: ["muscle"], meal: "lunch", title: "猪里脊全麦意面青豆盘", technique: "面", reason: "瘦猪肉配全麦意面，适合训练后午餐。", items: [["pork_tenderloin", 170], ["whole_pasta", 230], ["peas", 110], ["mushroom", 120], ["olive_oil", 8]] },
  { goals: ["fatLoss", "shape"], meal: "lunch", title: "鳕鱼白菜荞麦汤面", technique: "汤面", reason: "低脂汤面，不靠油炸和浓汤。", items: [["cod", 160], ["buckwheat_noodles", 160], ["napa_cabbage", 180], ["mushroom", 100], ["sesame_seeds", 4]] },
  { goals: ["muscle"], meal: "lunch", title: "火鸡胸红薯羽衣甘蓝盘", technique: "烤", reason: "红薯和火鸡胸适合备餐，羽衣甘蓝补纤维。", items: [["turkey_breast", 190], ["sweet_potato", 230], ["kale", 100], ["cottage_cheese", 90], ["olive_oil", 7]] },
  { goals: ["shape"], meal: "lunch", title: "豆腐鹰嘴豆南瓜炖菜", technique: "炖", reason: "植物蛋白和南瓜组合，口感厚实但不油。", items: [["firm_tofu", 170], ["chickpeas", 110], ["pumpkin", 180], ["spinach", 100], ["olive_oil", 6]] },
  { goals: ["fatLoss"], meal: "lunch", title: "鸡蛋金枪鱼生菜饭卷", technique: "卷", reason: "有卷的口感，但米饭和油脂都控制。", items: [["tuna", 120], ["egg", 80], ["lettuce", 120], ["white_rice", 90], ["cucumber", 100]] },
  { goals: ["muscle"], meal: "lunch", title: "鸡腿肉藜麦红腰豆锅", technique: "炖", reason: "高蛋白高碳水，适合增肌期正餐。", items: [["chicken_thigh_skinless", 180], ["quinoa", 210], ["kidney_beans", 130], ["bell_pepper", 120], ["olive_oil", 8]] },
  { goals: ["shape"], meal: "lunch", title: "青花鱼荞麦小菜盘", technique: "煎", reason: "鱼类脂肪配荞麦面，比外卖面更清爽。", items: [["mackerel", 115], ["buckwheat_noodles", 165], ["cucumber", 100], ["seaweed", 70], ["sesame_seeds", 5]] },
  { goals: ["fatLoss"], meal: "lunch", title: "扇贝西葫芦番茄饭", technique: "炒", reason: "扇贝和西葫芦热量低，番茄提味。", items: [["scallop", 150], ["zucchini", 180], ["tomato", 160], ["brown_rice", 110], ["olive_oil", 5]] },
  { goals: ["muscle", "shape"], meal: "lunch", title: "牛肉大麦卷心菜碗", technique: "炖", reason: "大麦带来咀嚼感，卷心菜让整餐不沉重。", items: [["lean_beef", 160], ["barley", 180], ["cabbage", 180], ["carrot", 80], ["olive_oil", 7]] },
  { goals: ["fatLoss", "shape"], meal: "lunch", title: "天贝花椰菜黑豆碗", technique: "烤", reason: "不吃肉也能有足够蛋白和纤维。", items: [["tempeh", 115], ["cauliflower", 190], ["black_beans", 120], ["tomato", 120], ["olive_oil", 6]] },
  { goals: ["muscle"], meal: "lunch", title: "三文鱼土豆青豆热盘", technique: "烤", reason: "土豆和青豆提供训练碳水，三文鱼补脂肪酸。", items: [["salmon", 175], ["potato", 240], ["peas", 110], ["asparagus", 120], ["olive_oil", 7]] },
  { goals: ["shape"], meal: "lunch", title: "猪里脊海带白菜汤面", technique: "汤面", reason: "汤面满足感强，里脊提供瘦蛋白。", items: [["pork_tenderloin", 140], ["seaweed", 70], ["napa_cabbage", 180], ["buckwheat_noodles", 150], ["sesame_seeds", 4]] },
  { goals: ["fatLoss"], meal: "lunch", title: "鸡胸芹菜蘑菇小米饭", technique: "炒", reason: "芹菜蘑菇增加体积，主食不过量。", items: [["chicken_breast", 160], ["celery", 140], ["mushroom", 130], ["millet_porridge", 160], ["olive_oil", 5]] },
  { goals: ["muscle"], meal: "lunch", title: "虾仁库斯库斯鹰嘴豆碗", technique: "饭碗", reason: "虾仁和鹰嘴豆叠加蛋白，库斯库斯变化口感。", items: [["shrimp", 170], ["couscous", 210], ["chickpeas", 130], ["bell_pepper", 120], ["olive_oil", 8]] },
  { goals: ["shape"], meal: "lunch", title: "嫩豆腐青豆番茄烩饭", technique: "烩", reason: "像烩饭但低油，豆腐青豆补蛋白。", items: [["silken_tofu", 180], ["peas", 110], ["tomato", 180], ["white_rice", 120], ["spinach", 90]] },

  { goals: ["fatLoss"], meal: "dinner", title: "鳕鱼海带豆腐汤", technique: "汤", reason: "晚餐清爽高蛋白，油脂很低。", items: [["cod", 160], ["seaweed", 80], ["silken_tofu", 180], ["bok_choy", 160], ["sesame_seeds", 3]] },
  { goals: ["shape"], meal: "dinner", title: "青花鱼卷心菜南瓜盘", technique: "煎", reason: "青花鱼香气足，用卷心菜和南瓜平衡油脂。", items: [["mackerel", 120], ["cabbage", 180], ["pumpkin", 160], ["mushroom", 100], ["olive_oil", 4]] },
  { goals: ["muscle"], meal: "dinner", title: "火鸡胸土豆菠菜晚餐盘", technique: "烤", reason: "增肌晚餐保留足量蛋白和主食。", items: [["turkey_breast", 190], ["potato", 220], ["spinach", 120], ["cottage_cheese", 100], ["olive_oil", 7]] },
  { goals: ["fatLoss", "shape"], meal: "dinner", title: "虾仁西葫芦花椰菜锅", technique: "炒", reason: "低脂蛋白配大量蔬菜，晚餐不负担。", items: [["shrimp", 150], ["zucchini", 180], ["cauliflower", 190], ["tomato", 120], ["olive_oil", 5]] },
  { goals: ["muscle"], meal: "dinner", title: "瘦牛红腰豆糙米晚餐", technique: "炖", reason: "高蛋白高纤维，适合力量训练日。", items: [["lean_beef", 170], ["kidney_beans", 130], ["brown_rice", 190], ["onion", 80], ["olive_oil", 7]] },
  { goals: ["shape"], meal: "dinner", title: "鸡腿肉白菜蘑菇汤饭", technique: "汤饭", reason: "去皮鸡腿肉更有满足感，汤饭油量可控。", items: [["chicken_thigh_skinless", 140], ["napa_cabbage", 200], ["mushroom", 120], ["white_rice", 110], ["sesame_seeds", 4]] },
  { goals: ["fatLoss"], meal: "dinner", title: "猪里脊芦笋番茄盘", technique: "煎", reason: "瘦猪肉配低热量蔬菜，晚餐很直接。", items: [["pork_tenderloin", 140], ["asparagus", 150], ["tomato", 160], ["lettuce", 80], ["olive_oil", 5]] },
  { goals: ["muscle", "shape"], meal: "dinner", title: "三文鱼荞麦海带碗", technique: "煎", reason: "鱼肉、荞麦面、海带组合，口味有变化。", items: [["salmon", 155], ["buckwheat_noodles", 170], ["seaweed", 70], ["cucumber", 100], ["sesame_seeds", 5]] },
  { goals: ["fatLoss"], meal: "dinner", title: "嫩豆腐蛋花小白菜汤", technique: "汤", reason: "轻晚餐，蛋白来自豆腐和鸡蛋。", items: [["silken_tofu", 220], ["egg", 80], ["bok_choy", 180], ["mushroom", 100], ["sesame_seeds", 3]] },
  { goals: ["shape"], meal: "dinner", title: "天贝茄子番茄煲", technique: "炖", reason: "不用油炸茄子，也能做出浓郁口感。", items: [["tempeh", 120], ["eggplant", 180], ["tomato", 180], ["onion", 70], ["olive_oil", 6]] },
  { goals: ["muscle"], meal: "dinner", title: "鸡胸大麦青豆碗", technique: "饭碗", reason: "大麦和青豆增加碳水与纤维，鸡胸补蛋白。", items: [["chicken_breast", 190], ["barley", 190], ["peas", 120], ["broccoli", 160], ["olive_oil", 7]] },
  { goals: ["fatLoss", "shape"], meal: "dinner", title: "扇贝冬瓜感海带汤", technique: "汤", reason: "没有冬瓜时用海带和小白菜做清汤感，低油低负担。", items: [["scallop", 140], ["seaweed", 80], ["bok_choy", 180], ["silken_tofu", 150], ["sesame_seeds", 3]] },
  { goals: ["shape"], meal: "dinner", title: "金枪鱼土豆生菜盘", technique: "拼盘", reason: "适合不想开火太久的晚餐，主食和蛋白都有。", items: [["tuna", 120], ["potato", 170], ["lettuce", 120], ["tomato", 130], ["olive_oil", 5]] },
  { goals: ["muscle"], meal: "dinner", title: "青花鱼玉米黑豆晚餐碗", technique: "饭碗", reason: "玉米和黑豆让晚餐更顶饱，鱼肉增加风味。", items: [["mackerel", 140], ["corn", 190], ["black_beans", 120], ["cabbage", 150], ["olive_oil", 5]] },
  { goals: ["fatLoss"], meal: "dinner", title: "鸡胸芹菜花椰菜汤", technique: "汤", reason: "高体积低油，适合晚上想吃热乎一点。", items: [["chicken_breast", 150], ["celery", 140], ["cauliflower", 180], ["mushroom", 100], ["olive_oil", 4]] },
  { goals: ["shape"], meal: "dinner", title: "红腰豆南瓜菠菜炖锅", technique: "炖", reason: "植物性晚餐，南瓜让口味自然偏甜。", items: [["kidney_beans", 130], ["pumpkin", 180], ["spinach", 110], ["tomato", 150], ["olive_oil", 5]] },
  { goals: ["muscle"], meal: "dinner", title: "鳕鱼库斯库斯芦笋盘", technique: "蒸", reason: "高蛋白配快速主食，训练后也不厚重。", items: [["cod", 190], ["couscous", 210], ["asparagus", 140], ["bell_pepper", 100], ["olive_oil", 7]] },
  { goals: ["fatLoss"], meal: "dinner", title: "虾仁白菜豆腐煲", technique: "炖", reason: "虾仁和豆腐双蛋白，白菜让汤底清甜。", items: [["shrimp", 140], ["firm_tofu", 150], ["napa_cabbage", 220], ["mushroom", 100], ["sesame_seeds", 3]] },
  { goals: ["shape"], meal: "dinner", title: "猪里脊四季豆糙米盘", technique: "炒", reason: "家常炒菜方向，但油量和主食克数明确。", items: [["pork_tenderloin", 140], ["green_beans", 180], ["brown_rice", 120], ["onion", 70], ["olive_oil", 6]] },
  { goals: ["muscle"], meal: "dinner", title: "火鸡胸鹰嘴豆番茄锅", technique: "炖", reason: "火鸡胸和鹰嘴豆提供扎实蛋白，番茄做自然酱汁。", items: [["turkey_breast", 180], ["chickpeas", 140], ["tomato", 190], ["spinach", 100], ["olive_oil", 7]] },
  { goals: ["fatLoss", "shape"], meal: "dinner", title: "豆腐羽衣甘蓝蘑菇锅", technique: "炒", reason: "绿色蔬菜和豆腐为主，适合轻晚餐。", items: [["firm_tofu", 170], ["kale", 100], ["mushroom", 140], ["cauliflower", 150], ["olive_oil", 5]] },
  { goals: ["muscle"], meal: "dinner", title: "瘦牛藜麦西葫芦盘", technique: "煎", reason: "经典高蛋白晚餐，蔬菜占比也足。", items: [["lean_beef", 170], ["quinoa", 190], ["zucchini", 180], ["tomato", 120], ["olive_oil", 7]] },
  { goals: ["fatLoss"], meal: "dinner", title: "沙丁鱼番茄白菜汤", technique: "汤", reason: "用鱼罐头思路做热汤，减少重油调味。", items: [["sardines", 90], ["tomato", 180], ["napa_cabbage", 200], ["seaweed", 60], ["sesame_seeds", 3]] },
  { goals: ["shape"], meal: "dinner", title: "鸡腿肉花椰菜南瓜盘", technique: "烤", reason: "比单纯鸡胸更好吃，仍然保持清爽配菜。", items: [["chicken_thigh_skinless", 145], ["cauliflower", 190], ["pumpkin", 170], ["lettuce", 80], ["olive_oil", 6]] },
  { goals: ["muscle"], meal: "dinner", title: "三文鱼红薯黑豆碗", technique: "烤", reason: "三文鱼、红薯和黑豆让晚餐恢复感更强。", items: [["salmon", 165], ["sweet_potato", 230], ["black_beans", 110], ["bok_choy", 150], ["olive_oil", 6]] },
  { goals: ["fatLoss"], meal: "dinner", title: "扇贝黄瓜小米热汤", technique: "汤饭", reason: "小米量不大，扇贝补蛋白，口感清淡。", items: [["scallop", 140], ["millet_porridge", 200], ["cucumber", 100], ["bok_choy", 130], ["sesame_seeds", 3]] },
  { goals: ["shape"], meal: "dinner", title: "天贝青豆卷心菜炒碗", technique: "炒", reason: "植物蛋白炒菜，不靠沙拉完成。", items: [["tempeh", 120], ["peas", 100], ["cabbage", 180], ["carrot", 80], ["olive_oil", 6]] },
  { goals: ["muscle"], meal: "dinner", title: "鸡胸白米饭海带汤套餐", technique: "套餐", reason: "保留白米饭但配高蛋白和清汤，适合更大众的饮食习惯。", items: [["chicken_breast", 190], ["white_rice", 180], ["seaweed", 70], ["bok_choy", 150], ["olive_oil", 6]] },
  { goals: ["fatLoss", "shape"], meal: "dinner", title: "鳕鱼茄子小白菜炖锅", technique: "炖", reason: "茄子和番茄类口感更家常，鳕鱼让蛋白不油腻。", items: [["cod", 160], ["eggplant", 170], ["bok_choy", 160], ["tomato", 140], ["olive_oil", 5]] },
  { goals: ["muscle"], meal: "dinner", title: "猪里脊玉米芦笋晚餐", technique: "煎", reason: "瘦肉和玉米组合，简单但不重复。", items: [["pork_tenderloin", 170], ["corn", 190], ["asparagus", 140], ["mushroom", 100], ["olive_oil", 7]] }
];

const expansionBlueprints = {
  breakfast: {
    techniques: ["粥", "饭碗", "汤面", "蒸", "煎", "吐司", "碗", "冷拌", "汤", "卷", "隔夜燕麦", "拼盘", "糊"],
    proteins: [["egg", 100], ["egg_white", 150], ["turkey_breast", 105], ["chicken_breast", 115], ["tuna", 95], ["shrimp", 105], ["cod", 100], ["firm_tofu", 150], ["silken_tofu", 180], ["greek_yogurt", 210], ["cottage_cheese", 160], ["soy_milk_unsweetened", 260], ["tempeh", 95], ["edamame", 100], ["black_beans", 95], ["peas", 100], ["pork_tenderloin", 105], ["chicken_thigh_skinless", 105], ["scallop", 105], ["milk_lowfat", 260]],
    carbs: [["oats", 42], ["millet_porridge", 250], ["whole_bread", 70], ["brown_rice", 135], ["quinoa", 135], ["buckwheat_noodles", 130], ["sweet_potato", 160], ["potato", 150], ["pumpkin", 170], ["corn", 150], ["barley", 130], ["white_rice", 120], ["whole_pasta", 140], ["couscous", 140]],
    vegetables: [["spinach", 90], ["tomato", 120], ["bok_choy", 120], ["mushroom", 100], ["lettuce", 90], ["cabbage", 120], ["asparagus", 110], ["zucchini", 130], ["bell_pepper", 100], ["kale", 80], ["cauliflower", 140], ["seaweed", 60], ["cucumber", 100], ["carrot", 80]],
    extras: [["blueberry", 80], ["strawberry", 100], ["apple", 100], ["banana", 85], ["kiwi", 90], ["pear", 90], ["grapefruit", 120], ["mango", 70], ["chia", 8], ["almonds", 12], ["walnut", 8], ["sesame_seeds", 4], ["avocado", 35]]
  },
  lunch: {
    techniques: ["饭碗", "炒", "炖", "烤", "汤面", "面", "卷", "蒸", "凉面", "烩", "套餐", "煎"],
    proteins: [["chicken_breast", 165], ["turkey_breast", 170], ["lean_beef", 150], ["pork_tenderloin", 150], ["chicken_thigh_skinless", 150], ["salmon", 145], ["cod", 170], ["mackerel", 120], ["sardines", 95], ["shrimp", 155], ["scallop", 150], ["tuna", 120], ["firm_tofu", 180], ["tempeh", 125], ["black_beans", 130], ["kidney_beans", 130], ["chickpeas", 120], ["lentils", 130], ["edamame", 130], ["egg", 110]],
    carbs: [["brown_rice", 155], ["quinoa", 165], ["white_rice", 145], ["buckwheat_noodles", 175], ["whole_pasta", 190], ["sweet_potato", 190], ["potato", 210], ["pumpkin", 190], ["corn", 180], ["barley", 165], ["couscous", 175], ["whole_bread", 80], ["millet_porridge", 230]],
    vegetables: [["broccoli", 180], ["cauliflower", 180], ["bok_choy", 170], ["napa_cabbage", 190], ["cabbage", 180], ["spinach", 110], ["tomato", 160], ["bell_pepper", 130], ["mushroom", 130], ["asparagus", 130], ["zucchini", 170], ["eggplant", 170], ["green_beans", 170], ["kale", 100], ["seaweed", 70], ["celery", 130], ["lettuce", 100], ["cucumber", 100], ["carrot", 90], ["onion", 80]],
    extras: [["olive_oil", 6], ["olive_oil", 8], ["avocado", 45], ["sesame_seeds", 5], ["almonds", 10], ["walnut", 8], ["chia", 6]]
  },
  dinner: {
    techniques: ["汤", "炖", "蒸", "烤", "炒", "汤饭", "饭碗", "煎", "高纤汤", "套餐", "烩", "拼盘"],
    proteins: [["cod", 165], ["shrimp", 145], ["scallop", 140], ["chicken_breast", 155], ["turkey_breast", 160], ["pork_tenderloin", 140], ["lean_beef", 145], ["chicken_thigh_skinless", 135], ["salmon", 145], ["mackerel", 115], ["sardines", 90], ["tuna", 115], ["firm_tofu", 180], ["silken_tofu", 210], ["tempeh", 115], ["black_beans", 115], ["kidney_beans", 115], ["chickpeas", 110], ["lentils", 120], ["egg", 100]],
    carbs: [["brown_rice", 120], ["quinoa", 130], ["white_rice", 115], ["buckwheat_noodles", 145], ["whole_pasta", 150], ["sweet_potato", 170], ["potato", 180], ["pumpkin", 180], ["corn", 150], ["barley", 135], ["couscous", 135], ["millet_porridge", 210], ["whole_bread", 55]],
    vegetables: [["bok_choy", 180], ["napa_cabbage", 210], ["cabbage", 190], ["broccoli", 180], ["cauliflower", 180], ["spinach", 120], ["mushroom", 130], ["tomato", 160], ["zucchini", 170], ["eggplant", 160], ["asparagus", 130], ["green_beans", 170], ["seaweed", 80], ["celery", 130], ["kale", 100], ["lettuce", 90], ["cucumber", 100], ["bell_pepper", 110], ["carrot", 80], ["onion", 70]],
    extras: [["olive_oil", 5], ["olive_oil", 6], ["sesame_seeds", 4], ["avocado", 35], ["chia", 5], ["almonds", 8]]
  }
};

expansionBlueprints.breakfast.proteins.push(["natto", 85], ["soybeans", 95], ["quail_egg", 70], ["pea_protein_tofu", 120]);
expansionBlueprints.breakfast.carbs.push(["rye_bread", 70], ["udon", 120], ["rice_noodles", 120]);
expansionBlueprints.breakfast.vegetables.push(["purple_cabbage", 90], ["bean_sprouts", 120], ["okra", 100], ["snow_peas", 100]);
expansionBlueprints.breakfast.extras.push(["dragon_fruit", 100], ["peach", 90], ["watermelon", 130], ["flaxseed", 7], ["peanut_butter", 10]);
expansionBlueprints.breakfast.proteins.push(["seitan", 90], ["tofu_skin", 55], ["mung_beans", 110], ["beef_shank", 85]);
expansionBlueprints.breakfast.carbs.push(["oat_bran", 35], ["brown_rice_noodles", 120], ["taro", 120], ["yam", 140]);
expansionBlueprints.breakfast.vegetables.push(["arugula", 70], ["chinese_chives", 90], ["beetroot", 90]);
expansionBlueprints.breakfast.extras.push(["pineapple", 100], ["papaya", 110], ["pomegranate", 70], ["pumpkin_seeds", 8], ["pistachios", 10], ["cashews", 10]);

expansionBlueprints.lunch.proteins.push(["tilapia", 165], ["lean_lamb", 135], ["duck_breast_skinless", 135], ["natto", 90], ["soybeans", 120], ["pea_protein_tofu", 150]);
expansionBlueprints.lunch.carbs.push(["rye_bread", 90], ["udon", 190], ["rice_noodles", 185], ["lotus_root", 160]);
expansionBlueprints.lunch.vegetables.push(["purple_cabbage", 140], ["bean_sprouts", 160], ["okra", 140], ["lotus_root", 150], ["winter_melon", 220], ["radish", 170], ["snow_peas", 130]);
expansionBlueprints.lunch.extras.push(["flaxseed", 6], ["peanut_butter", 10]);
expansionBlueprints.lunch.proteins.push(["beef_shank", 150], ["squid", 150], ["crab", 135], ["mussels", 145], ["seitan", 130], ["tofu_skin", 70], ["mung_beans", 130]);
expansionBlueprints.lunch.carbs.push(["oat_bran", 45], ["brown_rice_noodles", 190], ["taro", 180], ["yam", 180]);
expansionBlueprints.lunch.vegetables.push(["beetroot", 140], ["arugula", 80], ["chinese_chives", 120]);
expansionBlueprints.lunch.extras.push(["pumpkin_seeds", 8], ["pistachios", 10], ["cashews", 10]);

expansionBlueprints.dinner.proteins.push(["tilapia", 155], ["lean_lamb", 120], ["duck_breast_skinless", 125], ["quail_egg", 70], ["natto", 80], ["pea_protein_tofu", 150]);
expansionBlueprints.dinner.carbs.push(["rye_bread", 60], ["udon", 150], ["rice_noodles", 150], ["lotus_root", 130]);
expansionBlueprints.dinner.vegetables.push(["purple_cabbage", 130], ["bean_sprouts", 160], ["okra", 130], ["winter_melon", 240], ["radish", 180], ["snow_peas", 130], ["lotus_root", 130]);
expansionBlueprints.dinner.extras.push(["flaxseed", 5], ["peanut_butter", 8]);
expansionBlueprints.dinner.proteins.push(["beef_shank", 125], ["squid", 135], ["crab", 120], ["mussels", 125], ["seitan", 115], ["tofu_skin", 60], ["mung_beans", 120]);
expansionBlueprints.dinner.carbs.push(["brown_rice_noodles", 155], ["taro", 140], ["yam", 150], ["oat_bran", 35]);
expansionBlueprints.dinner.vegetables.push(["beetroot", 130], ["arugula", 70], ["chinese_chives", 110]);
expansionBlueprints.dinner.extras.push(["pumpkin_seeds", 7], ["pistachios", 8], ["cashews", 8]);

const expansionProfiles = {
  fatLoss: {
    prefix: "清爽",
    breakfast: { protein: 0.92, carb: 0.82, vegetable: 1.08, extra: 0.72 },
    lunch: { protein: 1.0, carb: 0.82, vegetable: 1.12, extra: 0.72 },
    dinner: { protein: 0.95, carb: 0.72, vegetable: 1.15, extra: 0.65 }
  },
  muscle: {
    prefix: "饱腹",
    breakfast: { protein: 1.12, carb: 1.18, vegetable: 1.0, extra: 1.0 },
    lunch: { protein: 1.2, carb: 1.22, vegetable: 1.0, extra: 1.08 },
    dinner: { protein: 1.18, carb: 1.18, vegetable: 1.0, extra: 1.0 }
  },
  shape: {
    prefix: "均衡",
    breakfast: { protein: 1.0, carb: 0.98, vegetable: 1.06, extra: 0.85 },
    lunch: { protein: 1.05, carb: 1.0, vegetable: 1.08, extra: 0.88 },
    dinner: { protein: 1.0, carb: 0.9, vegetable: 1.12, extra: 0.82 }
  }
};

const expansionFlavorWords = ["柠香", "黑椒", "番茄", "葱姜", "清润", "香草", "蒜香", "暖胃", "鲜蔬", "芝麻", "清爽", "家常", "海盐", "菌菇", "彩蔬", "姜汁", "胡椒", "慢炖", "轻烤", "温润", "紫苏", "山椒", "罗勒", "海苔", "孜然", "薄荷", "酸甜", "青柠", "低脂", "高纤", "鲜虾", "酱香", "焙烤", "轻盈", "能量", "脆蔬"];
const techniqueTitleMap = {
  "粥": "暖粥",
  "饭碗": "饭碗",
  "汤面": "汤面",
  "蒸": "蒸盘",
  "煎": "煎盘",
  "吐司": "吐司",
  "碗": "能量碗",
  "冷拌": "冷拌碗",
  "汤": "清汤",
  "卷": "卷",
  "隔夜燕麦": "隔夜燕麦",
  "拼盘": "拼盘",
  "炒": "快炒",
  "炖": "炖锅",
  "烤": "烤盘",
  "面": "拌面",
  "凉面": "凉面",
  "烩": "烩菜",
  "套餐": "套餐",
  "汤饭": "汤饭",
  "高纤汤": "高纤汤"
};

function scaledGrams(base, scale) {
  const value = base * scale;
  if (base <= 15) return Math.max(1, round(value, 0));
  return Math.max(5, Math.round(value / 5) * 5);
}

function pickFrom(list, index) {
  return list[index % list.length];
}

function compatibleTechniquesFor(carbId, proteinId, meal) {
  let techniques = ["饭碗", "炒", "炖", "烤", "蒸", "煎", "拼盘", "套餐"];
  if (["oats", "oat_bran"].includes(carbId)) techniques = ["隔夜燕麦", "碗", "冷拌", "粥", "糊"];
  if (["millet_porridge"].includes(carbId)) techniques = ["粥", "汤饭", "套餐", "碗"];
  if (["whole_bread"].includes(carbId)) techniques = ["吐司", "卷", "拼盘", "套餐"];
  if (["buckwheat_noodles", "whole_pasta", "brown_rice_noodles", "rice_noodles", "udon"].includes(carbId)) techniques = ["汤面", "凉面", "面", "炒"];
  if (["white_rice", "brown_rice", "quinoa", "barley", "couscous"].includes(carbId)) techniques = ["饭碗", "炒", "炖", "烩", "套餐", "汤饭"];
  if (["potato", "sweet_potato", "pumpkin", "corn", "taro", "yam", "lotus_root"].includes(carbId)) techniques = ["烤", "煎", "蒸", "炖", "拼盘", "饭碗"];

  if (["soy_milk_unsweetened", "milk_lowfat", "greek_yogurt", "cottage_cheese"].includes(proteinId)) {
    const dairyFriendly = ["隔夜燕麦", "碗", "冷拌", "粥", "糊", "拼盘"];
    const overlap = techniques.filter((technique) => dairyFriendly.includes(technique));
    techniques = overlap.length ? overlap : dairyFriendly;
  }
  if (meal === "dinner") {
    techniques = techniques.filter((technique) => !["隔夜燕麦", "吐司"].includes(technique));
    if (!techniques.length) techniques = ["汤", "炖", "蒸", "烤", "汤饭"];
  }
  return techniques;
}

function chooseCompatibleTechnique(blueprint, meal, carbId, proteinId, offset, index) {
  const preferred = pickFrom(blueprint.techniques, offset * 2 + index);
  const compatible = compatibleTechniquesFor(carbId, proteinId, meal);
  return compatible.includes(preferred) ? preferred : pickFrom(compatible, offset + index);
}

function addUniqueItem(items, pair, scale) {
  const [id, grams] = pair;
  const existing = items.find((item) => item[0] === id);
  if (existing) {
    existing[1] = scaledGrams(existing[1] + grams * 0.55, scale);
    return;
  }
  items.push([id, scaledGrams(grams, scale)]);
}

function createGoalMealExpansionSeeds() {
  const seeds = [];
  const goalOffsets = { fatLoss: 0, muscle: 7, shape: 14 };
  const mealOffsets = { breakfast: 0, lunch: 5, dinner: 11 };
  const variantTags = ["", "进阶", "活力", "轻盈", "强韧"];
  ["fatLoss", "muscle", "shape"].forEach((goal) => {
    ["breakfast", "lunch", "dinner"].forEach((meal) => {
      const blueprint = expansionBlueprints[meal];
      const profile = expansionProfiles[goal][meal];
      const prefix = expansionProfiles[goal].prefix;
      for (let index = 0; index < 56; index += 1) {
        const offset = index + goalOffsets[goal] + mealOffsets[meal];
        const carb = pickFrom(blueprint.carbs, offset * 5 + 2);
        let protein = pickFrom(blueprint.proteins, offset * 3);
        const creamyBreakfastProteins = ["soy_milk_unsweetened", "milk_lowfat", "greek_yogurt", "cottage_cheese"];
        const creamyFriendlyCarbs = ["oats", "millet_porridge", "pumpkin", "sweet_potato", "whole_bread"];
        if (meal === "breakfast" && creamyBreakfastProteins.includes(protein[0]) && !creamyFriendlyCarbs.includes(carb[0])) {
          protein = pickFrom(blueprint.proteins.filter(([id]) => !creamyBreakfastProteins.includes(id)), offset * 3 + 5);
        }
        const vegetableA = pickFrom(blueprint.vegetables, offset * 7 + 1);
        const vegetableB = pickFrom(blueprint.vegetables, offset * 11 + 3);
        const extra = pickFrom(blueprint.extras, offset * 13 + 4);
        const technique = chooseCompatibleTechnique(blueprint, meal, carb[0], protein[0], offset, index);
        const flavor = pickFrom(expansionFlavorWords, offset);
        const mealLabel = { breakfast: "早餐", lunch: "午餐", dinner: "晚餐" }[meal];
        const items = [];
        addUniqueItem(items, protein, profile.protein);
        addUniqueItem(items, carb, profile.carb);
        addUniqueItem(items, vegetableA, profile.vegetable);
        addUniqueItem(items, vegetableB, profile.vegetable);
        addUniqueItem(items, extra, profile.extra);

        const proteinName = ingredientById[protein[0]].name;
        const carbName = ingredientById[carb[0]].name;
        const suffix = techniqueTitleMap[technique] || "组合";
        const variant = variantTags[Math.floor(index / 14) % variantTags.length];
        seeds.push({
          goals: [goal],
          meal,
          title: `${prefix}${mealLabel}${variant}${flavor}${proteinName}${carbName}${suffix}`,
          technique,
          reason: `${goals[goal].label}向新增菜谱，使用${proteinName}搭配${carbName}和多种真实食材，按克数控制营养结构。`,
          items
        });
      }
    });
  });
  return seeds;
}

recipeSeedList.push(...createGoalMealExpansionSeeds());

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function debounce(fn, wait = 140) {
  let timer;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), wait);
  };
}

function localDateString(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(value, days) {
  const date = typeof value === "string" ? parseLocalDate(value) : new Date(value);
  date.setDate(date.getDate() + days);
  return localDateString(date);
}

function daysBetween(start, end) {
  const startTime = parseLocalDate(start).setHours(0, 0, 0, 0);
  const endTime = parseLocalDate(end).setHours(0, 0, 0, 0);
  return Math.round((endTime - startTime) / 86400000);
}

function loadCalendarRecords() {
  try {
    return JSON.parse(localStorage.getItem(CALENDAR_STORAGE_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function saveCalendarRecords() {
  localStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(state.calendarRecords));
}

function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nutritionForItem(id, grams) {
  const item = ingredientById[id];
  const ratio = grams / 100;
  return {
    kcal: item.kcal * ratio,
    protein: item.protein * ratio,
    carbs: item.carbs * ratio,
    fat: item.fat * ratio,
    fiber: item.fiber * ratio
  };
}

function totalNutrition(items) {
  return items.reduce(
    (sum, [id, grams]) => {
      const n = nutritionForItem(id, grams);
      sum.kcal += n.kcal;
      sum.protein += n.protein;
      sum.carbs += n.carbs;
      sum.fat += n.fat;
      sum.fiber += n.fiber;
      return sum;
    },
    { kcal: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );
}

function pickOne(list, avoidTitles = []) {
  const candidates = list.filter((item) => !avoidTitles.includes(item.title));
  const pool = candidates.length ? candidates : list;
  return pool[Math.floor(Math.random() * pool.length)];
}

function normalizeRecipe(seed, type) {
  return {
    type,
    title: seed.title,
    reason: seed.reason,
    items: seed.items,
    steps: seed.steps || buildRecipeSteps(seed)
  };
}

function recipePool(goal, meal) {
  const legacy = mealTemplates[goal][meal].map((recipe) => ({ ...recipe, goals: [goal], meal, legacy: true }));
  const expanded = recipeSeedList.filter((recipe) => recipe.meal === meal && recipeFitsGoal(recipe, goal, meal));
  return [...legacy, ...expanded];
}

function recipeFitsGoal(recipe, goal, meal) {
  if (recipe.goals.includes(goal)) return true;
  const total = totalNutrition(recipe.items);
  const hasProtein = recipe.items.some(([id]) => proteinCategoryNames.includes(ingredientById[id].category));
  const hasVegetableOrFruit = recipe.items.some(([id]) => ["蔬菜", "水果"].includes(ingredientById[id].category));
  const ranges = {
    fatLoss: {
      breakfast: [240, 520],
      lunch: [320, 700],
      dinner: [260, 660]
    },
    muscle: {
      breakfast: [300, 900],
      lunch: [360, 1050],
      dinner: [330, 1000]
    },
    shape: {
      breakfast: [260, 650],
      lunch: [360, 780],
      dinner: [320, 760]
    }
  };
  const [min, max] = ranges[goal][meal];
  return hasProtein && hasVegetableOrFruit && total.kcal >= min && total.kcal <= max;
}

function buildRecipeSteps(recipe) {
  const itemText = recipe.items.map(([id, grams]) => `${ingredientById[id].name} ${grams}g`).join("、");
  const proteins = recipe.items.filter(([id]) => proteinCategoryNames.includes(ingredientById[id].category)).map(([id, grams]) => `${ingredientById[id].name} ${grams}g`);
  const carbs = recipe.items.filter(([id]) => carbCategoryNames.includes(ingredientById[id].category)).map(([id, grams]) => `${ingredientById[id].name} ${grams}g`);
  const veg = recipe.items.filter(([id]) => ingredientById[id].category === "蔬菜").map(([id, grams]) => `${ingredientById[id].name} ${grams}g`);
  const fruit = recipe.items.filter(([id]) => ingredientById[id].category === "水果").map(([id, grams]) => `${ingredientById[id].name} ${grams}g`);
  const fats = recipe.items.filter(([id]) => ingredientById[id].category === "健康脂肪").map(([id, grams]) => `${ingredientById[id].name} ${grams}g`);
  const steps = [`称量并准备：${itemText}。肉类、海鲜和蔬菜分开处理，蔬果彻底清洗。`];

  const techniqueSteps = {
    "粥": [
      carbs.length ? `先加热${carbs.join("、")}作为粥底，保持小火。` : "先用清水做清淡汤底，保持小火。",
      proteins.length ? `放入${proteins.join("、")}煮至完全熟透，鱼虾类最后加入避免变老。` : "加入蛋白来源后轻轻搅散，避免糊底。",
      veg.length ? `最后加入${veg.join("、")}，煮 1 到 2 分钟保留颜色。` : "最后调整浓稠度，不额外加糖。"
    ],
    "汤": [
      "锅中加入清水或无油高汤，先煮耐煮食材 3 到 5 分钟。",
      proteins.length ? `加入${proteins.join("、")}，保持中小火煮到熟透。` : "加入豆制品或蛋类后轻轻推动。",
      veg.length ? `加入${veg.join("、")}，断生即可，出锅前再调味。` : "出锅前用黑胡椒、醋或少量盐调味。"
    ],
    "汤面": [
      carbs.length ? `先把${carbs.join("、")}煮到适口后捞入碗中。` : "先准备清汤底。",
      proteins.length ? `汤中加入${proteins.join("、")}煮熟。` : "汤中加入蛋白来源煮熟。",
      veg.length ? `加入${veg.join("、")}断生，连汤倒在主食上。` : "连汤倒在主食上，避免高油浇头。"
    ],
    "汤饭": [
      carbs.length ? `将${carbs.join("、")}加热后放入碗底。` : "先准备少量主食或豆类作为底。",
      proteins.length ? `用清汤煮熟${proteins.join("、")}。` : "用清汤煮熟蛋白食材。",
      veg.length ? `加入${veg.join("、")}，煮好后连汤浇在碗中。` : "最后倒入热汤，减少油盐。"
    ],
    "饭碗": [
      carbs.length ? `将${carbs.join("、")}加热后铺在碗底。` : "先准备碗底食材。",
      proteins.length ? `把${proteins.join("、")}煎、蒸或焯熟后切成适口大小。` : "把蛋白食材处理熟后放在一侧。",
      veg.length ? `${veg.join("、")}焯水、快炒或生食分区摆放。` : "补充一份生食或焯水蔬菜。"
    ],
    "碗": [
      carbs.length ? `先处理${carbs.join("、")}，温热或冷藏都可以。` : "先准备碗底。",
      proteins.length ? `加入${proteins.join("、")}，保证蛋白食材已熟或可直接食用。` : "加入酸奶、豆制品或蛋类作为蛋白来源。",
      fruit.length ? `铺上${fruit.join("、")}，甜味来自水果本身。` : veg.length ? `加入${veg.join("、")}增加体积。` : "最后检查总量，避免额外糖浆。"
    ],
    "冷拌": [
      "所有可生食食材清洗沥干，熟食提前放凉。",
      proteins.length ? `加入${proteins.join("、")}作为蛋白主体。` : "加入酸奶或豆类作为蛋白主体。",
      fats.length ? `最后加入${fats.join("、")}，控制份量后拌匀。` : "用醋、柠檬汁和黑胡椒调味。"
    ],
    "隔夜燕麦": [
      carbs.length ? `把${carbs.join("、")}与乳制品或豆浆混合。` : "把燕麦和液体混合。",
      "冷藏 6 小时以上，早晨取出后搅拌均匀。",
      fruit.length ? `加入${fruit.join("、")}，不额外加糖。` : "可加少量坚果或籽类增加口感。"
    ],
    "煎": [
      fats.length ? `锅中加入${fats.join("、")}，中小火加热。` : "使用不粘锅中小火加热。",
      proteins.length ? `先煎${proteins.join("、")}至熟透，盛出静置。` : "先处理需要加热的主食或豆制品。",
      veg.length ? `同锅加入${veg.join("、")}快煎或翻炒，最后合并装盘。` : "最后合并装盘，避免额外重酱。"
    ],
    "炒": [
      fats.length ? `热锅后加入${fats.join("、")}。` : "热锅后少量喷水或使用不粘锅。",
      proteins.length ? `先炒${proteins.join("、")}至变色或熟透。` : "先炒耐熟食材。",
      veg.length ? `加入${veg.join("、")}大火快炒，断生后立刻出锅。` : "最后调味，避免糖醋浓汁。"
    ],
    "炖": [
      "用番茄、洋葱、蘑菇或清水做底，不使用奶油浓汤。",
      proteins.length ? `加入${proteins.join("、")}小火炖到熟透。` : "加入豆类或豆腐小火炖煮。",
      veg.length ? `加入${veg.join("、")}继续炖 3 到 6 分钟。` : "炖至入味即可，不要收成高盐浓汁。"
    ],
    "烤": [
      "烤箱或空气炸锅预热到 180 到 200 度。",
      proteins.length ? `将${proteins.join("、")}铺在烤盘中，表面少量调味。` : "将主要食材铺在烤盘中。",
      veg.length || carbs.length ? `加入${[...veg, ...carbs].join("、")}同烤，中途翻面一次。` : "烤到表面微焦、内部熟透。"
    ],
    "卷": [
      proteins.length ? `先把${proteins.join("、")}做熟并切条。` : "先准备可卷入的蛋白食材。",
      veg.length ? `${veg.join("、")}洗净切条，保持干爽。` : "准备脆口蔬菜增加体积。",
      carbs.length ? `用${carbs.join("、")}作为外层或主食搭配，卷紧后切开。` : "用生菜或全麦面包卷起。"
    ],
    "吐司": [
      carbs.length ? `将${carbs.join("、")}烤到表面微脆。` : "先准备全谷主食。",
      proteins.length ? `铺上${proteins.join("、")}。` : "铺上酸奶、奶酪或豆制品。",
      veg.length || fruit.length ? `加入${[...veg, ...fruit].join("、")}，保持酱料清淡。` : "搭配一份蔬果。"
    ],
    "面": [
      carbs.length ? `先煮${carbs.join("、")}，保留一点面汤帮助拌匀。` : "先煮好主食。",
      proteins.length ? `另锅处理${proteins.join("、")}到熟透。` : "另锅处理蛋白食材。",
      veg.length ? `加入${veg.join("、")}与主食拌匀，避免奶油重酱。` : "用番茄或清淡酱汁拌匀。"
    ],
    "凉面": [
      carbs.length ? `${carbs.join("、")}煮熟后过凉水，沥干。` : "先准备凉拌主食。",
      proteins.length ? `${proteins.join("、")}焯熟或煎熟后放凉。` : "准备蛋白食材并放凉。",
      veg.length ? `加入${veg.join("、")}，用醋、柠檬汁、少量酱油拌匀。` : "用清爽调味汁拌匀。"
    ],
    "拼盘": [
      proteins.length ? `将${proteins.join("、")}煮熟、煎熟或直接沥干备用。` : "准备蛋白主体。",
      carbs.length ? `${carbs.join("、")}作为主食放在一侧。` : "根据饥饿程度补充少量主食。",
      veg.length || fruit.length ? `把${[...veg, ...fruit].join("、")}分区摆盘。` : "补一份蔬果分区摆盘。"
    ],
    "糊": [
      carbs.length ? `把${carbs.join("、")}加热到软糯。` : "先加热主食食材。",
      "加入豆浆或牛奶后小火搅拌，避免糊底。",
      proteins.length ? `最后加入${proteins.join("、")}补足蛋白，调到顺滑口感。` : "最后撒籽类或坚果，控制份量。"
    ],
    "蒸": [
      proteins.length ? `将${proteins.join("、")}放入蒸锅或蒸盘。` : "将主要蛋白食材放入蒸盘。",
      veg.length ? `旁边放入${veg.join("、")}，按熟成速度分批加入。` : "配菜可另行焯水。",
      carbs.length ? `${carbs.join("、")}提前加热后装盘。` : "出锅后直接装盘，淋少量清淡调味。"
    ],
    "烩": [
      "用番茄或清水做底，小火煮出自然汁水。",
      proteins.length ? `加入${proteins.join("、")}煮熟。` : "加入豆类或豆腐煮熟。",
      carbs.length || veg.length ? `放入${[...carbs, ...veg].join("、")}烩到入味，保持不过度收汁。` : "烩到入味即可。"
    ],
    "套餐": [
      carbs.length ? `${carbs.join("、")}作为主食，按克数装碗。` : "先装好主食。",
      proteins.length ? `${proteins.join("、")}少油烹调后作为主菜。` : "准备一份蛋白主菜。",
      veg.length ? `${veg.join("、")}做成清汤或快炒，和主菜分开装盘。` : "搭配清汤或蔬菜。"
    ]
  };

  steps.push(...(techniqueSteps[recipe.technique] || techniqueSteps["饭碗"]));
  steps.push("调味优先用黑胡椒、醋、柠檬汁、香草、葱姜蒜和少量低钠酱油，避免额外加糖。");
  return steps;
}

function generateDay() {
  state.rankMode = "menu";
  const recent = state.recentRecipeTitles;
  const breakfast = pickOne(recipePool(state.goal, "breakfast"), recent);
  const lunch = pickOne(recipePool(state.goal, "lunch"), [...recent, breakfast.title]);
  const dinner = pickOne(recipePool(state.goal, "dinner"), [...recent, breakfast.title, lunch.title]);
  state.currentMeals = [
    normalizeRecipe(breakfast, "早餐"),
    normalizeRecipe(lunch, "中餐"),
    normalizeRecipe(dinner, "晚餐")
  ];
  state.recentRecipeTitles = [...state.currentMeals.map((meal) => meal.title), ...state.recentRecipeTitles].slice(0, 24);
  renderMeals();
  renderDayTotals();
  renderMacroMeters();
  renderTopHealthRankFromMeals();
}

function renderGoalSummary() {
  const goal = goals[state.goal];
  $("#goalSummary").innerHTML = [
    ["目标", goal.label, goal.focus],
    ["热量", `${goal.kcal} kcal`, goal.note],
    ["蛋白质", `${goal.protein} g`, "鱼禽蛋豆优先。"],
    ["膳食纤维", `${goal.fiber} g`, "全谷蔬果补足。"]
  ]
    .map(
      ([label, value, note]) => `
        <article class="goal-stat">
          <span>${label}</span>
          <strong>${value}</strong>
          <p>${note}</p>
        </article>
      `
    )
    .join("");
}

function totalRecipeOptionCount() {
  let legacyCount = 0;
  Object.values(mealTemplates).forEach((goalSet) => {
    Object.values(goalSet).forEach((recipes) => {
      legacyCount += recipes.length;
    });
  });
  return legacyCount + recipeSeedList.length;
}

function renderAppCounts() {
  const recipeCount = totalRecipeOptionCount();
  $("#heroRecipeCount").textContent = recipeCount;
  $("#heroIngredientCount").textContent = ingredients.length;
  $("#navRecipeCount").textContent = `${recipeCount} 道菜谱池`;
  const welcomeRecipeCount = $("#welcomeRecipeCount");
  if (welcomeRecipeCount) welcomeRecipeCount.textContent = `${recipeCount} 道菜谱`;
}

function renderRecipeStats() {
  const techniqueCount = new Set(recipeSeedList.map((recipe) => recipe.technique)).size;
  const currentGoalCount = ["breakfast", "lunch", "dinner"].reduce((sum, meal) => sum + recipePool(state.goal, meal).length, 0);
  $("#recipeStats").innerHTML = `
    <span>${totalRecipeOptionCount()} 道菜谱</span>
    <span>${goals[state.goal].label} ${currentGoalCount} 道</span>
    <span>${techniqueCount} 种烹调方式</span>
  `;
}

function renderMeals() {
  $("#mealCards").innerHTML = state.currentMeals
    .map((meal) => {
      const total = totalNutrition(meal.items);
      return `
        <article class="meal-card">
          <div class="meal-top">
            <div>
              <span class="meal-label">${meal.type}</span>
              <h3 class="meal-title">${meal.title}</h3>
              <p class="meal-reason">${meal.reason}</p>
            </div>
          </div>
          ${nutritionMarkup(total)}
          <h3>精确食材</h3>
          <ul class="ingredient-lines">
            ${meal.items
              .map(([id, grams]) => {
                const item = ingredientById[id];
                return `<li>${item.name} ${grams}g <span>(${item.state})</span></li>`;
              })
              .join("")}
          </ul>
          <div class="meal-footer">
            <h3>详细步骤</h3>
            <ol class="steps-list">
              ${meal.steps.map((step) => `<li>${step}</li>`).join("")}
            </ol>
          </div>
        </article>
      `;
    })
    .join("");
}

function nutritionMarkup(total) {
  return `
    <div class="nutrition-row">
      <div><span>热量</span><strong>${round(total.kcal)} kcal</strong></div>
      <div><span>蛋白</span><strong>${round(total.protein, 1)}g</strong></div>
      <div><span>碳水</span><strong>${round(total.carbs, 1)}g</strong></div>
      <div><span>脂肪</span><strong>${round(total.fat, 1)}g</strong></div>
    </div>
  `;
}

function currentDayTotal() {
  return state.currentMeals.reduce(
    (sum, meal) => {
      const total = totalNutrition(meal.items);
      sum.kcal += total.kcal;
      sum.protein += total.protein;
      sum.carbs += total.carbs;
      sum.fat += total.fat;
      sum.fiber += total.fiber;
      return sum;
    },
    { kcal: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );
}

function renderDayTotals() {
  const total = currentDayTotal();
  $("#dayTotals").innerHTML = [
    ["总热量", `${round(total.kcal)} kcal`],
    ["蛋白质", `${round(total.protein, 1)}g`],
    ["碳水", `${round(total.carbs, 1)}g`],
    ["脂肪", `${round(total.fat, 1)}g`],
    ["纤维", `${round(total.fiber, 1)}g`]
  ]
    .map(
      ([label, value]) => `
        <div class="total-pill">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");
}

function renderMacroMeters() {
  const total = currentDayTotal();
  const goal = goals[state.goal];
  const rows = [
    ["热量", total.kcal, goal.kcal, "kcal"],
    ["蛋白质", total.protein, goal.protein, "g"],
    ["碳水", total.carbs, goal.carbs, "g"],
    ["脂肪", total.fat, goal.fat, "g"],
    ["纤维", total.fiber, goal.fiber, "g"]
  ];
  $("#macroMeters").innerHTML = rows
    .map(([label, current, target, unit]) => {
      const pct = Math.min(120, (current / target) * 100);
      return `
        <div>
          <div class="meter-head">
            <strong>${label}</strong>
            <span>${round(current, label === "热量" ? 0 : 1)} / ${target}${unit}</span>
          </div>
          <div class="meter-bar"><span style="width:${pct}%"></span></div>
        </div>
      `;
    })
    .join("");
}

function boundedPercent(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function renderTopHealthRank({ grade, source, message, metrics }) {
  const medal = $("#topGradeMedal");
  medal.className = `rank-medal ${grade.rankClass || grade.className.replace("grade", "rank")}`;
  medal.innerHTML = `<span>${source}</span><strong>${grade.grade}</strong>`;
  $("#health-rank-title").textContent = `${source} · ${grade.label} · ${grade.score} 分`;
  $("#topGradeMessage").textContent = message;
  $("#topGradeBars").innerHTML = metrics
    .map(
      (metric) => `
        <div class="rank-bar-row">
          <span>${metric.label}</span>
          <div class="rank-track"><span style="width:${boundedPercent(metric.percent)}%"></span></div>
          <strong>${metric.value}</strong>
        </div>
      `
    )
    .join("");
}

function menuHealthGrade(total) {
  const goal = goals[state.goal];
  const kcalRatio = total.kcal / goal.kcal;
  let score = 100;
  score -= Math.min(28, Math.abs(kcalRatio - 1) * 60);
  if (total.protein < goal.protein * 0.85) score -= Math.min(22, (1 - total.protein / (goal.protein * 0.85)) * 35);
  if (total.fiber < goal.fiber * 0.75) score -= Math.min(18, (1 - total.fiber / (goal.fiber * 0.75)) * 28);
  if (total.fat > goal.fat * 1.2) score -= Math.min(18, ((total.fat - goal.fat * 1.2) / goal.fat) * 45);
  if (total.kcal < goal.kcal * 0.68) score -= 8;
  return gradeFromScore(score, "需要调整");
}

function renderTopHealthRankFromMeals() {
  if (!state.currentMeals.length) return;
  const total = currentDayTotal();
  const goal = goals[state.goal];
  const grade = menuHealthGrade(total);
  const energyFit = 100 - Math.min(100, Math.abs(total.kcal - goal.kcal) / goal.kcal * 100);
  const metrics = [
    { label: "热量贴合", percent: energyFit, value: `${round(total.kcal)}kcal` },
    { label: "蛋白达成", percent: (total.protein / goal.protein) * 100, value: `${round(total.protein)}g` },
    { label: "纤维达成", percent: (total.fiber / goal.fiber) * 100, value: `${round(total.fiber)}g` },
    { label: "脂肪平衡", percent: total.fat <= goal.fat ? 100 : 100 - ((total.fat - goal.fat) / goal.fat) * 100, value: `${round(total.fat)}g` }
  ];
  const message =
    grade.score >= 92
      ? "很稳，继续保持。"
      : grade.score >= 80
        ? "整体不错。"
        : grade.score >= 64
          ? "可用，建议微调。"
          : "建议重新生成。";
  renderTopHealthRank({ grade, source: `${goal.label}方案`, message, metrics });
}

function renderTopHealthRankFromAnalysis(totals, grade) {
  const goal = goals[state.goal];
  const metrics = [
    { label: "控糖表现", percent: 100 - (totals.sugar / 60) * 100, value: `${round(totals.sugar)}g` },
    { label: "控钠表现", percent: 100 - (totals.sodium / 2300) * 100, value: `${round(totals.sodium)}mg` },
    { label: "脂肪控制", percent: 100 - (totals.fat / 80) * 100, value: `${round(totals.fat)}g` },
    { label: "蛋白补给", percent: (totals.protein / goal.protein) * 100, value: `${round(totals.protein)}g` }
  ];
  const message =
    grade.score < 54
      ? "风险偏高，下一餐清淡。"
      : grade.score < 72
        ? "注意控糖和控钠。"
        : "表现不错。";
  renderTopHealthRank({ grade, source: "今日饮食", message, metrics });
}

function renderIngredientFilters() {
  const categories = ["全部", ...new Set(ingredients.map((item) => item.category))];
  $("#categoryFilters").innerHTML = categories
    .map((category) => `<button class="category-pill ${category === state.category ? "active" : ""}" data-category="${category}" type="button">${category}</button>`)
    .join("");
}

function renderIngredientStats() {
  const categories = new Set(ingredients.map((item) => item.category));
  $("#ingredientStats").innerHTML = `
    <span>${ingredients.length} 种食材</span>
    <span>${categories.size} 个分类</span>
  `;
}

function renderIngredients() {
  const keyword = state.search.trim().toLowerCase();
  const filtered = ingredients.filter((item) => {
    const categoryMatch = state.category === "全部" || item.category === state.category;
    const text = `${item.name} ${item.category} ${item.aliases.join(" ")}`.toLowerCase();
    return categoryMatch && (!keyword || text.includes(keyword));
  });
  $("#ingredientList").innerHTML =
    filtered
      .map(
        (item) => `
          <article class="ingredient-card">
            <div>
              <h3>${item.name}</h3>
              <div class="ingredient-meta">
                <span>${item.category}</span>
                <span>${item.state}</span>
                <span>${item.kcal} kcal/100g</span>
              </div>
            </div>
            <div class="ingredient-control">
              <input type="number" min="1" step="1" value="${item.defaultGram}" aria-label="${item.name} 克数" data-grams-for="${item.id}" />
              <button class="mini-btn add-ingredient" data-id="${item.id}" type="button">加入</button>
            </div>
          </article>
        `
      )
      .join("") || `<div class="empty-state">没有找到食材，试试输入更短的关键词。</div>`;
}

function addToBasket(id, grams) {
  const safeGrams = Math.max(1, Number(grams) || ingredientById[id].defaultGram);
  const existing = state.basket.find((item) => item.id === id);
  if (existing) {
    existing.grams = round(existing.grams + safeGrams);
  } else {
    state.basket.push({ id, grams: round(safeGrams) });
  }
  renderBasket();
}

function renderBasket() {
  if (!state.basket.length) {
    $("#basketTable").innerHTML = `<div class="empty-state">先从左侧加入食材，或直接输入“鸡胸肉 150g，西兰花 180g”。</div>`;
    return;
  }
  const rows = state.basket
    .map((row) => {
      const item = ingredientById[row.id];
      const n = nutritionForItem(row.id, row.grams);
      return `
        <div class="basket-row">
          <strong>${item.name}</strong>
          <input class="basket-grams" data-id="${row.id}" type="number" min="1" step="1" value="${row.grams}" aria-label="${item.name} 克数" />
          <span>${round(n.kcal)} kcal</span>
          <button class="icon-btn remove-basket" data-id="${row.id}" type="button" aria-label="删除 ${item.name}">×</button>
        </div>
      `;
    })
    .join("");
  $("#basketTable").innerHTML = `
    <div class="basket-row header">
      <span>食材</span><span>克数</span><span>热量</span><span></span>
    </div>
    ${rows}
  `;
}

function parsePantryText() {
  const text = $("#pantryInput").value.trim();
  if (!text) {
    $("#parseNotice").textContent = "请输入食材和克数。";
    return;
  }
  const segments = text.split(/[，,、;；\n]+/).map((seg) => seg.trim()).filter(Boolean);
  const missed = [];
  let added = 0;

  segments.forEach((seg) => {
    const match = seg.match(/(\d+(?:\.\d+)?)\s*(g|克|毫升|ml|mL)?/);
    const alias = aliasEntries.find((entry) => seg.includes(entry.alias));
    if (match && alias) {
      addToBasket(alias.id, Number(match[1]));
      added += 1;
    } else {
      missed.push(seg);
    }
  });

  const message = [`已加入 ${added} 项`];
  if (missed.length) message.push(`未识别：${missed.join("、")}`);
  $("#parseNotice").textContent = message.join("；");
}

function composeDish() {
  if (!state.basket.length) {
    $("#customDish").innerHTML = `<div class="empty-state">先加入至少 2 到 3 种食材，再生成菜谱。</div>`;
    return;
  }

  const items = state.basket.map((item) => [item.id, item.grams]);
  const total = totalNutrition(items);
  const selected = state.basket.map((row) => ({ ...ingredientById[row.id], grams: row.grams }));
  const proteinItems = selected.filter((item) => proteinCategoryNames.includes(item.category));
  const vegItems = selected.filter((item) => item.category === "蔬菜");
  const carbItems = selected.filter((item) => carbCategoryNames.includes(item.category));
  const fatItems = selected.filter((item) => item.category === "健康脂肪");
  const anchor = proteinItems[0] || carbItems[0] || vegItems[0] || selected[0];
  const style = pickCustomDishStyle(selected, proteinItems, vegItems, carbItems);
  const dishName = buildDishName(anchor, proteinItems, vegItems, carbItems, style);
  const score = healthScore(total, selected, vegItems, proteinItems, fatItems);
  const notes = buildDishNotes(total, vegItems, proteinItems, carbItems, fatItems);
  const steps = buildDishSteps(selected, proteinItems, vegItems, carbItems, fatItems, style);

  $("#customDish").innerHTML = `
    <article class="dish-card">
      <div class="dish-header">
        <div>
          <p class="eyebrow">生成菜谱</p>
          <h2>${dishName}</h2>
          <p class="meal-reason">按照你给出的克数生成。热量和营养为估算值，实际会受品牌、熟重变化和调味影响。</p>
        </div>
        <div class="score-badge"><span>${score}</span>分</div>
      </div>
      ${nutritionMarkup(total)}
      <div class="dish-body">
        <div>
          <h3>克数清单</h3>
          <ul class="ingredient-lines">
            ${selected.map((item) => `<li>${item.name} ${item.grams}g (${item.state})</li>`).join("")}
          </ul>
          <h3>健康校验</h3>
          <ul class="dish-notes">${notes.map((note) => `<li>${note}</li>`).join("")}</ul>
        </div>
        <div>
          <h3>详细做法</h3>
          <ol class="steps-list">${steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </div>
      </div>
    </article>
  `;
}

function pickCustomDishStyle(selected, proteinItems, vegItems, carbItems) {
  state.customDishCounter += 1;
  const hasLiquidProtein = selected.some((item) => ["soy_milk_unsweetened", "milk_lowfat", "greek_yogurt"].includes(item.id));
  const styles = [];
  if (carbItems.length && proteinItems.length && vegItems.length) styles.push("饭碗", "汤饭", "炒碗", "烤盘", "炖锅");
  if (proteinItems.length && vegItems.length) styles.push("热炒", "清汤", "蒸盘", "轻煎", "卷饼");
  if (carbItems.some((item) => item.id.includes("noodles") || item.id.includes("pasta"))) styles.push("汤面", "拌面");
  if (hasLiquidProtein || selected.some((item) => item.id === "oats")) styles.push("早餐碗", "燕麦杯", "暖粥");
  if (vegItems.length >= 3) styles.push("蔬菜炖锅", "烤蔬菜盘", "高纤汤");
  if (!styles.length) styles.push("健康组合盘", "温热拼盘", "轻食碗");
  return styles[state.customDishCounter % styles.length];
}

function buildDishName(anchor, proteinItems, vegItems, carbItems, style) {
  if (proteinItems.length && vegItems.length && carbItems.length) return `${anchor.name}${style}`;
  if (proteinItems.length && vegItems.length) return `${anchor.name}${style}`;
  if (vegItems.length >= 3) return `高纤${style}`;
  if (carbItems.length && proteinItems.length) return `${anchor.name}${style}`;
  return `${anchor.name}${style}`;
}

function healthScore(total, selected, vegItems, proteinItems, fatItems) {
  let score = 68;
  const vegGrams = vegItems.reduce((sum, item) => sum + item.grams, 0);
  const oilGrams = fatItems.filter((item) => item.id === "olive_oil").reduce((sum, item) => sum + item.grams, 0);
  if (total.protein >= 25) score += 10;
  if (total.fiber >= 8) score += 8;
  if (vegGrams >= 180) score += 8;
  if (proteinItems.length) score += 4;
  if (total.kcal > 850) score -= 10;
  if (total.fat > 35) score -= 6;
  if (oilGrams > 15) score -= 8;
  if (selected.length < 3) score -= 6;
  return Math.max(45, Math.min(100, Math.round(score)));
}

function buildDishNotes(total, vegItems, proteinItems, carbItems, fatItems) {
  const notes = [];
  if (proteinItems.length) notes.push(`蛋白质约 ${round(total.protein, 1)}g，适合作为正餐蛋白来源。`);
  else notes.push("缺少明确蛋白来源，可加入鸡胸肉、虾仁、鸡蛋、豆腐或无糖酸奶。");
  if (vegItems.reduce((sum, item) => sum + item.grams, 0) >= 180) notes.push("蔬菜份量充足，有利于饱腹和纤维摄入。");
  else notes.push("蔬菜偏少，建议把绿叶菜或十字花科蔬菜补到 180g 以上。");
  if (carbItems.length) notes.push("包含全谷或薯类主食，能量释放比精制甜食更稳定。");
  else notes.push("如果这是午餐或训练日前后餐，可补 80 到 150g 熟重主食，优先选择全谷或薯类。");
  const oil = fatItems.filter((item) => item.id === "olive_oil").reduce((sum, item) => sum + item.grams, 0);
  if (oil > 12) notes.push("橄榄油超过 12g，热量会明显上升，可减到 5 到 8g。");
  notes.push(`本组合约 ${round(total.kcal)} kcal，调味建议以柠檬汁、醋、黑胡椒、香草和少量盐为主。`);
  return notes;
}

function buildDishSteps(selected, proteinItems, vegItems, carbItems, fatItems, style) {
  const listText = selected.map((item) => `${item.name} ${item.grams}g`).join("、");
  const steps = [`先称量所有食材：${listText}。清洗蔬菜，肉类和豆制品分开处理，避免交叉污染。`];
  const proteinText = proteinItems.map((item) => `${item.name} ${item.grams}g`).join("、");
  const vegText = vegItems.map((item) => `${item.name} ${item.grams}g`).join("、");
  const carbText = carbItems.map((item) => `${item.name} ${item.grams}g`).join("、");
  const fatText = fatItems.map((item) => `${item.name} ${item.grams}g`).join("、");
  const styleSteps = {
    "饭碗": [`${carbText || "主食"}提前加热后铺底。`, proteinText ? `${proteinText}少油煎、蒸或焯熟后放在一侧。` : "把蛋白食材处理熟后放在一侧。", vegText ? `${vegText}焯水或快炒后分区摆放。` : "补足一份蔬菜分区摆放。"],
    "汤饭": [`${carbText || "主食"}放入碗底。`, proteinText ? `用清水或无油高汤煮熟${proteinText}。` : "用清汤煮熟蛋白食材。", vegText ? `加入${vegText}断生，连汤倒入碗中。` : "连汤倒入碗中。"],
    "炒碗": [fatText ? `锅中加入${fatText}。` : "使用不粘锅少油加热。", proteinText ? `先炒${proteinText}至熟透。` : "先炒主要食材。", `${vegText || "蔬菜"}快速翻炒后与${carbText || "主食"}合并。`],
    "烤盘": ["烤箱或空气炸锅预热到 190 度。", `${proteinText || "蛋白食材"}与${vegText || "蔬菜"}铺在烤盘中。`, `${carbText ? `${carbText}提前蒸熟后同盘加热，` : ""}烤到表面微焦即可。`],
    "炖锅": ["用番茄、蘑菇、洋葱或清水做清淡锅底。", proteinText ? `加入${proteinText}小火炖熟。` : "加入豆类或豆制品炖熟。", vegText ? `加入${vegText}继续炖 3 到 6 分钟。` : "收汁不要过浓，避免高盐。"],
    "热炒": [fatText ? `热锅加入${fatText}。` : "热锅后用不粘锅少油操作。", proteinText ? `先处理${proteinText}至完全熟透。` : "先处理主要食材。", vegText ? `加入${vegText}大火快炒，断生后立刻出锅。` : "最后调味出锅。"],
    "清汤": ["锅中加水或无油高汤煮开。", proteinText ? `放入${proteinText}煮熟。` : "放入蛋白食材煮熟。", vegText ? `加入${vegText}，出锅前再调味。` : "出锅前再调味。"],
    "蒸盘": ["蒸锅上汽。", proteinText ? `将${proteinText}放入蒸盘，蒸至熟透。` : "将主要食材放入蒸盘。", vegText ? `${vegText}按熟成速度分批加入，避免过软。` : "配菜另行焯水。"],
    "轻煎": [fatText ? `锅中加入${fatText}，中小火加热。` : "不粘锅中小火加热。", proteinText ? `把${proteinText}煎到两面上色并熟透。` : "把主要食材煎到上色。", vegText ? `${vegText}同锅快煎或焯水后装盘。` : "搭配蔬菜装盘。"],
    "卷饼": [proteinText ? `${proteinText}做熟后切条。` : "蛋白食材做熟后切条。", vegText ? `${vegText}切条或撕成片。` : "准备脆口蔬菜。", `${carbText || "生菜或全麦主食"}作为外层，卷紧后切开。`],
    "汤面": [`${carbText || "面类主食"}煮到适口。`, proteinText ? `另用清汤煮熟${proteinText}。` : "清汤中加入蛋白食材。", vegText ? `加入${vegText}断生后浇在面上。` : "浇入清汤，少油调味。"],
    "拌面": [`${carbText || "面类主食"}煮熟后沥干。`, proteinText ? `${proteinText}做熟后切块。` : "蛋白食材做熟。", `${vegText || "蔬菜"}加入后用醋、柠檬汁和少量低钠酱油拌匀。`],
    "早餐碗": [`${carbText || "主食"}作为碗底。`, proteinText ? `加入${proteinText}补蛋白。` : "加入酸奶、豆浆或豆制品补蛋白。", "水果或蔬菜最后加入，不额外加糖。"],
    "燕麦杯": ["燕麦或主食与牛奶、豆浆或酸奶混合。", "冷藏或小火加热到顺滑。", "最后加入水果、坚果或籽类，严格控制克数。"],
    "暖粥": [`${carbText || "粥底"}小火加热。`, proteinText ? `加入${proteinText}煮熟。` : "加入蛋白食材煮熟。", vegText ? `最后加入${vegText}，保持清淡。` : "最后调味。"],
    "蔬菜炖锅": ["先用番茄或清水做锅底。", vegText ? `加入${vegText}炖到软而不烂。` : "加入蔬菜炖煮。", proteinText ? `最后加入${proteinText}补足蛋白。` : "可补豆腐或鸡蛋提升蛋白。"],
    "烤蔬菜盘": ["烤箱预热 190 度。", vegText ? `${vegText}铺盘，少量油脂拌匀。` : "蔬菜铺盘。", proteinText ? `加入${proteinText}同烤或另煎后合盘。` : "烤到边缘微焦。"],
    "高纤汤": ["锅中加水煮开。", vegText ? `加入${vegText}煮到断生。` : "加入蔬菜煮到断生。", proteinText ? `加入${proteinText}补蛋白，最后调味。` : "最后少盐调味。"],
    "健康组合盘": [carbText ? `${carbText}加热后装盘。` : "先摆好基础食材。", proteinText ? `${proteinText}做熟后作为主菜。` : "补充蛋白来源。", vegText ? `${vegText}做成热菜或清爽配菜。` : "搭配蔬菜更均衡。"],
    "温热拼盘": [carbText ? `${carbText}加热后放一侧。` : "需要加热的食材先处理。", proteinText ? `${proteinText}做熟切块。` : "准备蛋白食材。", vegText ? `${vegText}分区摆盘。` : "分区摆盘。"],
    "轻食碗": [carbText ? `${carbText}控制份量铺底。` : "用蔬菜或豆制品铺底。", proteinText ? `${proteinText}作为主要蛋白。` : "加入蛋白来源。", vegText ? `加入${vegText}增加体积和纤维。` : "补足蔬菜。"]
  };
  steps.push(...(styleSteps[style] || styleSteps["健康组合盘"]));
  steps.push("吃之前复核总热量；如果目标是减脂，优先减少油和坚果，如果目标是增肌，优先增加蛋白和主食。");
  return steps;
}

function renderDrinkFilters() {
  const categories = ["全部", ...new Set(drinks.map((drink) => drink.category))];
  $("#drinkFilters").innerHTML = categories
    .map((category) => `<button class="category-pill ${category === state.drinkCategory ? "active" : ""}" data-drink-category="${category}" type="button">${category}</button>`)
    .join("");
}

function filteredDrinks() {
  const keyword = state.drinkSearch.trim().toLowerCase();
  const localizedKeywords = {
    "Coca-Cola": "可口可乐 可乐 零度 coke cola",
    Pepsi: "百事可乐 百事 可乐 cola",
    Sprite: "雪碧 lemon lime 柠檬 汽水",
    Fanta: "芬达 橙味 汽水",
    "Mountain Dew": "激浪 山露 汽水 咖啡因",
    "Dr Pepper": "胡椒博士 可乐 汽水",
    "Red Bull": "红牛 能量饮料",
    Monster: "魔爪 能量饮料",
    Gatorade: "佳得乐 运动饮料",
    AriZona: "亚利桑那 绿茶 冰茶",
    Starbucks: "星巴克 咖啡 星冰乐 玛奇朵",
    Lipton: "立顿 冰红茶 柠檬茶",
    "Fuze Tea": "柠檬茶 冰茶",
    Orangina: "橙味 汽水 果汁汽水",
    Lucozade: "能量饮料 运动饮料",
    "Pocari Sweat": "宝矿力水特 运动饮料 电解质",
    Calpis: "可尔必思 乳酸菌",
    Kirin: "麒麟 午后红茶 柠檬茶",
    Binggrae: "宾格瑞 香蕉牛奶",
    Lotte: "乐天 牛奶汽水",
    Oishi: "绿茶 蜂蜜柠檬",
    "Thums Up": "印度可乐 可乐",
    Maaza: "芒果 果汁饮料",
    "Guaraná Antarctica": "瓜拉纳 巴西 汽水",
    Jarritos: "墨西哥 汽水 橘子",
    Bundaberg: "姜汁啤酒 姜汁汽水"
  };
  return drinks.filter((drink) => {
    const categoryMatch = state.drinkCategory === "全部" || drink.category === state.drinkCategory;
    const text = `${drink.country} ${drink.brand} ${drink.subBrand} ${drink.category} ${localizedKeywords[drink.brand] || ""}`.toLowerCase();
    return categoryMatch && (!keyword || text.includes(keyword));
  });
}

function sugarCubes(sugar) {
  return sugar / 4;
}

function sugarRisk(sugar) {
  if (sugar >= 36) return { label: "高糖：超过 AHA 男性日建议上限", level: "high" };
  if (sugar >= 25) return { label: "高糖：接近或超过女性日建议上限", level: "high" };
  if (sugar >= 12) return { label: "中糖：建议偶尔饮用", level: "medium" };
  return { label: sugar === 0 ? "无糖：仍建议以水为主" : "低糖：继续看总热量", level: "low" };
}

function cubeMarkup(cubes) {
  const whole = Math.round(cubes);
  const shown = Math.min(whole, 14);
  const cubesHtml = Array.from({ length: shown }, () => `<span class="cube"></span>`).join("");
  const more = whole > 14 ? `<span class="cube more">+${whole - 14}</span>` : "";
  return cubesHtml + more;
}

function estimateIngredientSugar(ingredient, servingGram) {
  const directSugar = ingredientSugarPer100[ingredient.id];
  if (directSugar !== undefined) return (directSugar * servingGram) / 100;
  const carbs = ((ingredient.carbs || 0) * servingGram) / 100;
  if (ingredient.category === "水果") return carbs * 0.72;
  if (ingredient.category === "蔬菜") return carbs * 0.35;
  if (["红薯", "南瓜", "玉米", "胡萝卜", "番茄"].includes(ingredient.name)) return carbs * 0.28;
  return 0;
}

function estimateIngredientSodium(ingredient, servingGram) {
  const directSodium = ingredientSodiumPer100[ingredient.id];
  if (directSodium !== undefined) return (directSodium * servingGram) / 100;
  const categorySodium = {
    肉禽鱼蛋: 70,
    豆乳蛋白: 25,
    蔬菜: 20,
    水果: 2,
    全谷主食: 5,
    主食: 5,
    健康脂肪: 2
  };
  return ((categorySodium[ingredient.category] || 10) * servingGram) / 100;
}

function analysisItemFromIngredient(ingredient) {
  if (ingredientAnalysisCache.has(ingredient.id)) return ingredientAnalysisCache.get(ingredient.id);
  const servingGram = ingredient.defaultGram || 100;
  const item = {
    id: `ingredient_${ingredient.id}`,
    baseId: ingredient.id,
    name: ingredient.name,
    category: ingredient.category,
    serving: `1份 / ${servingGram}g`,
    servingGram,
    kcal: (ingredient.kcal * servingGram) / 100,
    sugar: estimateIngredientSugar(ingredient, servingGram),
    protein: (ingredient.protein * servingGram) / 100,
    fat: (ingredient.fat * servingGram) / 100,
    sodium: estimateIngredientSodium(ingredient, servingGram),
    source: "ingredient"
  };
  ingredientAnalysisCache.set(ingredient.id, item);
  return item;
}

function ingredientAliasMatches(segment, alias) {
  const trimmedAlias = alias.trim();
  if (trimmedAlias.length <= 1 && !safeSingleCharacterIngredientAliases.has(trimmedAlias)) return false;
  return segment.toLowerCase().includes(trimmedAlias.toLowerCase());
}

function quantityScaleNearAlias(segment, item, alias) {
  const lowerSegment = segment.toLowerCase();
  const lowerAlias = alias.toLowerCase();
  const aliasIndex = lowerSegment.indexOf(lowerAlias);
  if (aliasIndex < 0) return quantityScale(segment, item);
  const afterAlias = segment.slice(aliasIndex + alias.length, aliasIndex + alias.length + 18);
  const afterScale = extractQuantityScale(afterAlias, item);
  if (afterScale !== null) return afterScale;
  const beforeAlias = segment.slice(Math.max(0, aliasIndex - 12), aliasIndex);
  const beforeScale = extractQuantityScale(beforeAlias, item);
  if (beforeScale !== null) return beforeScale;
  return quantityScale(segment, item);
}

function analysisFoodId(entry) {
  return entry.item.baseId || entry.item.id;
}

function parseFoodLog(text) {
  const segments = text
    .replace(/今天吃了[:：]?/g, "")
    .split(/[，,、;；\n]+/)
    .map((segment) => segment.trim())
    .filter(Boolean);
  const sourceSegments = segments.length ? segments : [text.trim()];
  const matches = [];
  const unmatched = [];

  sourceSegments.forEach((segment) => {
    const foundIds = new Set();
    const coveredIngredientIds = new Set();
    const lowerSegment = segment.toLowerCase();
    const zeroSugarSignal = /(无糖|零糖|0糖|零卡|零度|zero|diet|light|zero sugar)/i.test(segment);
    foodAnalysisAliasEntries.forEach((entry) => {
      if (zeroSugarSignal && zeroSugarBlockedAnalysisIds.has(entry.id)) return;
      if (lowerSegment.includes(entry.alias.toLowerCase()) && !foundIds.has(entry.id)) {
        const item = foodAnalysisById[entry.id];
        if (!item) return;
        const scale = quantityScaleNearAlias(segment, item, entry.alias);
        matches.push({ item, scale, raw: segment });
        foundIds.add(entry.id);
        const coveredId = analysisIngredientBridge[entry.id];
        if (coveredId) coveredIngredientIds.add(coveredId);
      }
    });
    aliasEntries.forEach((entry) => {
      if (coveredIngredientIds.has(entry.id)) return;
      if (!ingredientAliasMatches(segment, entry.alias)) return;
      const ingredient = ingredientById[entry.id];
      const item = analysisItemFromIngredient(ingredient);
      const scale = quantityScaleNearAlias(segment, item, entry.alias);
      matches.push({ item, scale, raw: segment });
      coveredIngredientIds.add(entry.id);
    });
    if (!foundIds.size && !coveredIngredientIds.size && segment.length > 1) unmatched.push(segment);
  });

  return { matches, unmatched };
}

function extractQuantityScale(segment, item) {
  const gramMatch = segment.match(/(\d+(?:\.\d+)?)\s*(g|克|毫升|ml|mL)/);
  if (gramMatch) {
    const amount = Number(gramMatch[1]);
    return Math.max(0.1, amount / item.servingGram);
  }
  const countMatch = segment.match(/(\d+(?:\.\d+)?)\s*(份|个|個|杯|罐|瓶|块|塊|片|包|碗|根|条|條)?/);
  if (countMatch && !/(今天|早餐|午餐|晚餐)/.test(countMatch[0])) {
    return Math.max(0.1, Number(countMatch[1]));
  }
  return null;
}

function quantityScale(segment, item) {
  const scale = extractQuantityScale(segment, item);
  if (scale !== null) return scale;
  return 1;
}

function analysisTotals(matches) {
  return matches.reduce(
    (sum, entry) => {
      sum.kcal += entry.item.kcal * entry.scale;
      sum.sugar += entry.item.sugar * entry.scale;
      sum.protein += entry.item.protein * entry.scale;
      sum.fat += entry.item.fat * entry.scale;
      sum.sodium += entry.item.sodium * entry.scale;
      return sum;
    },
    { kcal: 0, sugar: 0, protein: 0, fat: 0, sodium: 0 }
  );
}

function gradeFromScore(score, cLabel = "高油高糖") {
  const safeScore = Math.max(0, Math.min(100, Math.round(score)));
  const tiers = [
    { min: 97, grade: "S+", label: "顶级健康", className: "grade-sp", rankClass: "rank-sp" },
    { min: 92, grade: "S", label: "非常健康", className: "grade-s", rankClass: "rank-s" },
    { min: 88, grade: "A+", label: "优秀健康", className: "grade-ap", rankClass: "rank-ap" },
    { min: 80, grade: "A", label: "健康", className: "grade-a", rankClass: "rank-a" },
    { min: 72, grade: "B+", label: "比较健康", className: "grade-bp", rankClass: "rank-bp" },
    { min: 64, grade: "B", label: "一般", className: "grade-b", rankClass: "rank-b" },
    { min: 54, grade: "C+", label: "风险偏高", className: "grade-cp", rankClass: "rank-cp" },
    { min: 42, grade: "C", label: cLabel, className: "grade-c", rankClass: "rank-c" }
  ];
  const tier = tiers.find((item) => safeScore >= item.min) || { grade: "D", label: "需要重整", className: "grade-d", rankClass: "rank-d" };
  return { ...tier, score: safeScore };
}

function healthGrade(totals, matches) {
  let score = 100;
  const foodCount = Math.max(1, matches.reduce((sum, entry) => sum + entry.scale, 0));
  const proteinRatio = totals.kcal ? (totals.protein * 4) / totals.kcal : 0;
  if (totals.sugar > 25) score -= Math.min(42, (totals.sugar - 25) * 1.05);
  if (totals.fat > 45) score -= Math.min(24, (totals.fat - 45) * 0.45);
  if (totals.sodium > 1500) score -= Math.min(30, (totals.sodium - 1500) / 55);
  if (totals.kcal > 1500) score -= Math.min(18, (totals.kcal - 1500) / 85);
  if (proteinRatio < 0.14 && totals.kcal > 500) score -= Math.min(12, (0.14 - proteinRatio) * 80);
  const highProcessedIds = new Set(["cola", "pepsi", "milk_tea", "frappuccino", "fried_chicken", "hamburger", "fries", "pizza", "hotdog", "instant_noodles", "ramen", "hotpot", "bbq", "donut", "chips", "cake"]);
  const highProcessedCount = matches.filter((entry) => highProcessedIds.has(analysisFoodId(entry))).length;
  score -= Math.min(20, (highProcessedCount / foodCount) * 14 + highProcessedCount * 2);
  const sugaryDrinkIds = new Set(["cola", "pepsi", "sweet_tea", "milk_tea", "frappuccino", "energy_drink"]);
  const sugaryDrinkCount = matches.filter((entry) => sugaryDrinkIds.has(analysisFoodId(entry))).length;
  score -= Math.min(18, sugaryDrinkCount * 8);
  const healthyIds = new Set(["americano", "chicken_breast_meal", "egg_meal", "broccoli_meal", "yogurt_unsweetened", "oatmeal_meal", "protein_shake", "salmon_meal", "tofu_meal", "vegetable_soup", "chicken_breast", "turkey_breast", "lean_beef", "pork_tenderloin", "lean_lamb", "salmon", "tuna", "cod", "mackerel", "sardines", "shrimp", "scallop", "tilapia", "egg", "egg_white", "quail_egg", "firm_tofu", "silken_tofu", "tempeh", "soy_milk_unsweetened", "greek_yogurt", "oats", "brown_rice", "quinoa", "broccoli", "spinach", "tomato", "cucumber", "lettuce", "kale", "asparagus"]);
  const healthyCount = matches.filter((entry) => healthyIds.has(analysisFoodId(entry)) || (entry.item.source === "ingredient" && entry.item.category !== "健康脂肪")).length;
  score += Math.min(10, healthyCount * 3);
  return gradeFromScore(score, "高油高糖");
}

function buildAnalysisAdvice(totals, matches, unmatched) {
  const advice = [];
  if (totals.sugar > 50) advice.push({ type: "warning", text: `今天糖分明显偏高，约 ${round(totals.sugar)}g，相当于 ${round(sugarCubes(totals.sugar), 1)} 颗方糖。建议接下来优先喝水或无糖茶。` });
  else if (totals.sugar > 25) advice.push({ type: "warning", text: `今天糖分偏高，已超过 25g 控制线。下一杯饮料建议换成无糖版本。` });
  if (totals.sodium > 2000) advice.push({ type: "warning", text: `钠含量偏高，约 ${round(totals.sodium)}mg。今天后续少吃泡面、炸物、腌制食品和重口味酱料。` });
  else if (totals.sodium > 1500) advice.push({ type: "warning", text: `钠摄入已经偏高，晚餐建议清淡一些，多选蒸、煮、炖。` });
  if (totals.fat > 65) advice.push({ type: "warning", text: `脂肪偏高，今天已经约 ${round(totals.fat, 1)}g。后续蛋白质优先选鸡胸、鱼、虾、豆腐。` });
  if (totals.protein < 35 && totals.kcal > 600) advice.push({ type: "normal", text: `蛋白质占比不高，下一餐可以补一份鸡蛋、豆腐、鱼虾或鸡胸肉。` });
  if (matches.some((entry) => ["cola", "pepsi", "sweet_tea", "milk_tea", "frappuccino", "energy_drink"].includes(analysisFoodId(entry)))) {
    advice.push({ type: "normal", text: "含糖饮料会让糖分迅速上升。建议今天剩余时间以白水、气泡水、无糖茶或黑咖啡为主。" });
  }
  if (unmatched.length) advice.push({ type: "normal", text: `有 ${unmatched.length} 项暂未识别：${unmatched.join("、")}。可以写得更具体，例如“牛排 180g”“米饭 1碗”或“鸡胸肉 150g”。` });
  if (!advice.length) advice.push({ type: "normal", text: "这次记录整体比较稳。继续保持：优质蛋白、足量蔬菜、少糖饮料。" });
  return advice;
}

function renderAnalysisEmpty() {
  $("#analysisLevel").className = "analysis-level empty";
  $("#analysisLevel").innerHTML = `
    <span>等待分析</span>
    <strong>--</strong>
    <p>输入后自动估算。</p>
  `;
  $("#analysisTotals").innerHTML = "";
  $("#analysisSugarCubes").innerHTML = "";
  $("#analysisAdvice").innerHTML = "";
  $("#substitutionPanel").innerHTML = "";
  $("#analysisFoodList").innerHTML = "";
}

function renderFoodAnalysis(result) {
  state.lastAnalysis = result;
  state.rankMode = "analysis";
  const { totals, matches, unmatched } = result;
  const grade = healthGrade(totals, matches);
  const goal = goals[state.goal];
  const remaining = {
    kcal: Math.max(0, goal.kcal - totals.kcal),
    sugar: Math.max(0, 25 - totals.sugar),
    protein: Math.max(0, goal.protein - totals.protein),
    sodium: Math.max(0, 2000 - totals.sodium)
  };
  const advice = buildAnalysisAdvice(totals, matches, unmatched);

  $("#analysisLevel").className = `analysis-level ${grade.className}`;
  $("#analysisLevel").innerHTML = `
    <strong>${grade.grade}</strong>
    <span>${grade.label} · ${grade.score} 分</span>
    <p>${grade.score < 54 ? "后续清淡一点。" : "继续保持清楚记录。"}</p>
  `;
  $("#analysisTotals").innerHTML = [
    ["热量", `${round(totals.kcal)} kcal`],
    ["糖分", `${round(totals.sugar, 1)}g`],
    ["蛋白质", `${round(totals.protein, 1)}g`],
    ["脂肪", `${round(totals.fat, 1)}g`],
    ["钠", `${round(totals.sodium)}mg`]
  ]
    .map(([label, value]) => `<div class="analysis-total"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
  $("#analysisSugarCubes").innerHTML = `
    <h3>高糖可视化</h3>
    <div class="sugar-line">
      <div><span>总糖分</span><strong>${round(totals.sugar, 1)}g</strong></div>
      <div><span>约</span><strong>${round(sugarCubes(totals.sugar), 1)} 颗方糖</strong></div>
    </div>
    <div class="cube-row" aria-label="约 ${round(sugarCubes(totals.sugar), 1)} 颗方糖">${cubeMarkup(sugarCubes(totals.sugar))}</div>
  `;
  $("#analysisAdvice").innerHTML = `
    <h3>AI 建议</h3>
    <ul class="advice-list">${advice.map((item) => `<li class="${item.type === "warning" ? "warning" : ""}">${item.text}</li>`).join("")}</ul>
    <h3>今天还能吃多少</h3>
    <div class="remaining-grid">
      <div><span>热量余量</span><strong>${round(remaining.kcal)} kcal</strong></div>
      <div><span>糖分余量</span><strong>${round(remaining.sugar, 1)}g</strong></div>
      <div><span>蛋白质还需</span><strong>${round(remaining.protein, 1)}g</strong></div>
      <div><span>钠余量</span><strong>${round(remaining.sodium)}mg</strong></div>
    </div>
  `;
  renderSubstitutionRecommendations(matches, totals);
  $("#analysisFoodList").innerHTML = `
    <h3>识别到的食物</h3>
    <div class="analysis-food-items">
      ${matches
        .map((entry) => {
          const multiplier = entry.scale === 1 ? entry.item.serving : `${round(entry.scale, 2)} × ${entry.item.serving}`;
          return `<div class="analysis-food-item"><span>${entry.item.name}</span><strong>${multiplier}</strong></div>`;
        })
        .join("")}
    </div>
  `;
  renderTopHealthRankFromAnalysis(totals, grade);
}

function analyzeFoodLog() {
  const input = $("#foodLogInput").value.trim();
  if (!input) {
    state.lastAnalysis = null;
    state.rankMode = "menu";
    renderAnalysisEmpty();
    renderTopHealthRankFromMeals();
    $("#analysisAdvice").innerHTML = `<ul class="advice-list"><li class="warning">请先输入今天吃了什么，例如：牛排 180g、米饭 1碗、西兰花 150g，也可以记录可乐、奶茶、炸鸡等。</li></ul>`;
    return;
  }
  const parsed = parseFoodLog(input);
  if (!parsed.matches.length) {
    state.lastAnalysis = null;
    state.rankMode = "menu";
    renderAnalysisEmpty();
    renderTopHealthRankFromMeals();
    $("#analysisAdvice").innerHTML = `<ul class="advice-list"><li class="warning">暂时没有识别到食物。可以尝试输入：牛排、牛肉、鸡蛋、米饭、西兰花、虾仁、三文鱼、豆腐、可乐、奶茶等。</li></ul>`;
    return;
  }
  renderFoodAnalysis({ ...parsed, totals: analysisTotals(parsed.matches) });
}

function renderDrinks() {
  const list = filteredDrinks();
  const highest = list.reduce((max, drink) => (drink.sugar > max.sugar ? drink : max), { sugar: 0, brand: "无", subBrand: "" });
  const avgSugar = list.length ? list.reduce((sum, drink) => sum + drink.sugar, 0) / list.length : 0;
  const over25 = list.filter((drink) => drink.sugar >= 25).length;
  $("#drinkStats").innerHTML = [
    ["覆盖饮品", `${list.length} 款`],
    ["平均方糖", `${round(sugarCubes(avgSugar), 1)} 颗`],
    ["最高糖", `${highest.brand} ${highest.subBrand}`],
    ["超过 25g", `${over25} 款`]
  ]
    .map(
      ([label, value]) => `
        <div class="drink-stat">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");

  $("#drinkCards").innerHTML =
    list
      .map((drink) => {
        const cubes = sugarCubes(drink.sugar);
        const risk = sugarRisk(drink.sugar);
        return `
          <article class="drink-card">
            <div class="drink-brand-row">
              <div class="drink-logo" style="--brand-bg:${drink.color};">${drink.badge}</div>
              <div>
                <h3>${drink.brand}</h3>
                <p>${drink.subBrand}</p>
              </div>
            </div>
            <div class="drink-tags">
              <span>${drink.country}</span>
              <span>${drink.size}</span>
              <span>${drink.category}</span>
            </div>
            <div class="sugar-line">
              <div>
                <span>含糖量</span>
                <strong>${round(drink.sugar, 1)}g</strong>
              </div>
              <div>
                <span>约</span>
                <strong>${round(cubes, 1)} 颗</strong>
              </div>
            </div>
            <div class="cube-row" aria-label="约 ${round(cubes, 1)} 颗方糖">${cubeMarkup(cubes)}</div>
            <div class="sugar-alert ${risk.level}">${risk.label}</div>
            <p>${drink.note}；约 ${drink.kcal} kcal。</p>
          </article>
        `;
      })
      .join("") || `<div class="empty-state">没有找到饮品，试试换一个品牌或分类。</div>`;
}

const featurePanelIds = ["ai-assistant", "goals", "day-menu", "weekly-planner", "sugar-radar", "photo-lab", "food-builder", "data-source", "health-calendar"];
let pageTransitionTimer;

function runPageTransition() {
  document.body.classList.remove("page-transition-run");
  void document.body.offsetWidth;
  document.body.classList.add("page-transition-run");
  window.clearTimeout(pageTransitionTimer);
  pageTransitionTimer = window.setTimeout(() => {
    document.body.classList.remove("page-transition-run");
  }, 900);
}

function activatePanel(panelId, shouldScroll = true) {
  if (!featurePanelIds.includes(panelId)) return;
  if (shouldScroll) runPageTransition();
  state.selectedPanel = panelId;
  document.body.classList.add("panel-mode");
  featurePanelIds.forEach((id) => {
    const panel = document.getElementById(id);
    if (panel) panel.classList.toggle("is-active", id === panelId);
  });
  $$(".side-nav-link").forEach((link) => {
    const target = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("active", target === panelId);
  });
  if (shouldScroll) {
    const panel = document.getElementById(panelId);
    if (panel) {
      window.setTimeout(() => {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 90);
    }
  }
}

function transitionToAnchor(target) {
  const element = document.getElementById(target);
  if (!element) return;
  runPageTransition();
  window.setTimeout(() => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 90);
}

const costByCategory = {
  "全谷主食": 0.55,
  "主食": 0.42,
  "肉禽鱼蛋": 1.65,
  "豆乳蛋白": 0.82,
  "蔬菜": 0.48,
  "水果": 0.62,
  "健康脂肪": 2.4
};

function estimateItemsCost(items) {
  return items.reduce((sum, [id, grams]) => {
    const item = ingredientById[id];
    const per100 = costByCategory[item.category] || 0.75;
    return sum + (grams / 100) * per100;
  }, 0);
}

function recipeCost(recipe) {
  return estimateItemsCost(recipe.items);
}

function chooseRecipeForPlan(goal, meal, avoidTitles, budget, profile, dayIndex) {
  const pool = recipePool(goal, meal).filter((recipe) => !avoidTitles.includes(recipe.title));
  const ranked = (pool.length ? pool : recipePool(goal, meal))
    .map((recipe) => ({ recipe, cost: recipeCost(recipe), nutrition: totalNutrition(recipe.items) }))
    .sort((a, b) => {
      if (profile === "student") return a.cost - b.cost || b.nutrition.protein - a.nutrition.protein;
      if (profile === "training") return b.nutrition.protein - a.nutrition.protein || a.cost - b.cost;
      if (profile === "light") return a.nutrition.fat - b.nutrition.fat || a.nutrition.kcal - b.nutrition.kcal;
      return Math.abs(a.cost - budget / 3) - Math.abs(b.cost - budget / 3);
    });
  const affordable = ranked.filter((entry) => entry.cost <= budget / 2.4);
  const choices = affordable.length >= 4 ? affordable : ranked;
  return choices[dayIndex % Math.min(choices.length, 10)].recipe;
}

function generateWeeklyPlan() {
  const profile = $("#weeklyProfile").value;
  const budget = Math.max(5, Number($("#weeklyBudget").value) || 12);
  const days = [];
  const used = [];
  for (let i = 0; i < 7; i += 1) {
    const date = addDays(localDateString(), i);
    const meals = ["breakfast", "lunch", "dinner"].map((meal) => {
      const recipe = normalizeRecipe(chooseRecipeForPlan(state.goal, meal, used, budget, profile, i), { breakfast: "早餐", lunch: "中餐", dinner: "晚餐" }[meal]);
      used.push(recipe.title);
      return recipe;
    });
    const total = meals.reduce((sum, meal) => {
      const n = totalNutrition(meal.items);
      sum.kcal += n.kcal;
      sum.protein += n.protein;
      sum.fiber += n.fiber;
      sum.cost += recipeCost(meal);
      return sum;
    }, { kcal: 0, protein: 0, fiber: 0, cost: 0 });
    days.push({ date, meals, total });
  }
  renderWeeklyPlan(days, profile, budget);
}

function renderWeeklyPlan(days, profile, budget) {
  const profileLabels = { student: "学生党预算", training: "训练高蛋白", office: "上班族备餐", light: "清爽控糖" };
  $("#weeklyPlan").innerHTML = days
    .map((day, index) => `
      <article class="week-day-card">
        <div class="week-day-head">
          <span>Day ${index + 1}</span>
          <strong>${day.date}</strong>
          <small>${profileLabels[profile]} · 约 $${round(day.total.cost, 1)} / 预算 $${budget}</small>
        </div>
        <div class="week-meals">
          ${day.meals.map((meal) => `<div><span>${meal.type}</span><strong>${meal.title}</strong></div>`).join("")}
        </div>
        <div class="week-nutrition">
          <span>${round(day.total.kcal)} kcal</span>
          <span>蛋白 ${round(day.total.protein)}g</span>
          <span>纤维 ${round(day.total.fiber)}g</span>
        </div>
      </article>
    `)
    .join("");
}

const substituteMap = {
  cola: ["可乐 → 无糖可乐 / 气泡水 + 柠檬片", "把 39g 糖降到 0g，先保留口感再减甜。"],
  pepsi: ["百事可乐 → 百事 Zero / 无糖茶", "减少液体糖，避免一天糖分直接爆表。"],
  sweet_tea: ["冰红茶 → 无糖乌龙茶 / 自泡柠檬茶", "茶味保留，糖分可从 40g+ 降到接近 0g。"],
  milk_tea: ["奶茶 → 小杯、三分糖、去奶盖、少珍珠", "优先砍糖和脂肪，想喝也可以做低风险版本。"],
  frappuccino: ["星冰乐 → 冰美式 + 少量牛奶", "甜咖啡通常像甜品，替换后热量差距很大。"],
  fried_chicken: ["炸鸡 → 烤鸡腿 / 空气炸鸡胸", "保留蛋白质，把油脂和钠降下来。"],
  hamburger: ["汉堡 → 全麦鸡胸三明治", "把油脂肉饼换成高蛋白低油版本。"],
  fries: ["薯条 → 烤土豆 / 玉米 / 红薯", "保留主食满足感，减少油炸脂肪。"],
  instant_noodles: ["泡面 → 荞麦面 + 鸡蛋 + 青菜", "泡面最主要问题是钠，换汤底会更稳。"],
  cake: ["蛋糕 → 希腊酸奶 + 水果", "甜味保留，但蛋白质和饱腹感更好。"],
  hotpot: ["火锅 → 清汤锅底 + 瘦肉豆腐 + 少蘸料", "火锅风险在锅底、蘸料和加工丸子。"],
  bbq: ["烧烤 → 烤鱼/烤鸡胸 + 大量蔬菜", "减少肥肉和重盐酱料。"]
};

function buildSubstitutionRecommendations(matches, totals) {
  const cards = [];
  matches.forEach((entry) => {
    const item = substituteMap[entry.item.id];
    if (item) cards.push({ title: item[0], reason: item[1] });
  });
  if (totals.sugar > 25 && !cards.some((card) => card.title.includes("无糖"))) {
    cards.push({ title: "下一杯饮料换成无糖茶或水", reason: "今天糖分已经偏高，先从饮料下手最有效。" });
  }
  if (totals.sodium > 1500) cards.push({ title: "晚餐用蒸/煮/炖，少酱料", reason: "钠高时，不建议再叠加泡面、炸物、腌制食品。" });
  if (totals.protein < 45) cards.push({ title: "补一份高蛋白低油食物", reason: "鸡蛋、鱼虾、鸡胸、豆腐、无糖酸奶都比较稳。" });
  return cards.slice(0, 5);
}

function renderSubstitutionRecommendations(matches, totals) {
  const cards = buildSubstitutionRecommendations(matches, totals);
  $("#substitutionPanel").innerHTML = `
    <h3>AI 替代推荐</h3>
    <div class="substitution-grid">
      ${cards.map((card) => `<article><strong>${card.title}</strong><p>${card.reason}</p></article>`).join("")}
    </div>
  `;
}

const exerciseTypeLabels = {
  aerobic: "有氧运动",
  anaerobic: "无氧力量",
  mixed: "有氧 + 无氧",
  recovery: "恢复拉伸"
};

const exerciseMetValues = {
  aerobic: 7.0,
  anaerobic: 6.0,
  mixed: 6.6,
  recovery: 3.0
};

function estimateExerciseBurned(type, minutes) {
  const safeMinutes = Math.max(0, Number(minutes) || 0);
  const met = exerciseMetValues[type] || exerciseMetValues.aerobic;
  const assumedWeightKg = 65;
  return Math.round((met * 3.5 * assumedWeightKg * safeMinutes) / 200);
}

function mealEntries(record) {
  const meals = [
    ["早餐", record.breakfast || ""],
    ["中餐", record.lunch || ""],
    ["晚餐", record.dinner || ""]
  ].filter(([, value]) => value.trim());
  if (!meals.length && record.meals?.trim()) meals.push(["饮食记录", record.meals]);
  return meals;
}

function dayRecord(date = state.selectedDate) {
  const base = {
    breakfast: "",
    lunch: "",
    dinner: "",
    meals: "",
    exerciseType: "aerobic",
    exerciseMinutes: 40,
    exercise: "",
    burned: 0,
    plan: "轻量恢复",
    checkedIn: false,
    score: 0
  };
  const record = state.calendarRecords[date];
  if (!record) return base;
  const merged = { ...base, ...record };
  if (!merged.breakfast && !merged.lunch && !merged.dinner && merged.meals) {
    merged.dinner = merged.meals;
  }
  if (!merged.burned && merged.exerciseMinutes) {
    merged.burned = estimateExerciseBurned(merged.exerciseType, merged.exerciseMinutes);
  }
  return merged;
}

function calculateDayScore(record) {
  const meals = mealEntries(record);
  const minutes = Math.max(0, Number(record.exerciseMinutes) || 0);
  const burned = Number(record.burned) || estimateExerciseBurned(record.exerciseType, minutes);
  let score = 28;
  score += Math.min(36, meals.length * 12);
  if (meals.length === 3) score += 6;
  if (record.exerciseType) score += 6;
  if (record.exercise?.trim()) score += 7;
  if (minutes >= 20) score += Math.min(14, Math.round(minutes / 6));
  score += Math.min(12, Math.round(burned / 45));
  if (record.plan) score += 4;
  if (record.checkedIn) score += 7;
  return Math.max(0, Math.min(100, score));
}

function rankFromScore(score) {
  if (score >= 96) return { name: "传奇健康王者", short: "Legend", className: "rank-legend", iconClass: "rank-icon-legend" };
  if (score >= 90) return { name: "王者健康段位", short: "Master", className: "rank-master", iconClass: "rank-icon-master" };
  if (score >= 82) return { name: "钻石健康段位", short: "Diamond", className: "rank-diamond", iconClass: "rank-icon-diamond" };
  if (score >= 74) return { name: "铂金健康段位", short: "Platinum", className: "rank-platinum", iconClass: "rank-icon-platinum" };
  if (score >= 66) return { name: "黄金健康段位", short: "Gold", className: "rank-gold", iconClass: "rank-icon-gold" };
  if (score >= 54) return { name: "白银健康段位", short: "Silver", className: "rank-silver", iconClass: "rank-icon-silver" };
  if (score >= 40) return { name: "青铜健康段位", short: "Bronze", className: "rank-bronze", iconClass: "rank-icon-bronze" };
  return { name: "新手修复段位", short: "Starter", className: "rank-starter", iconClass: "rank-icon-starter" };
}

function averageScoreForLastDays(days) {
  const today = localDateString();
  let total = 0;
  let count = 0;
  for (let i = 0; i < days; i += 1) {
    const record = state.calendarRecords[addDays(today, -i)];
    if (record) {
      total += calculateDayScore(record);
      count += 1;
    }
  }
  return count ? round(total / count) : 0;
}

function computeStreak(today = localDateString()) {
  let streak = 0;
  let gap = 0;
  for (let i = 0; i < 320; i += 1) {
    const date = addDays(today, -i);
    const record = state.calendarRecords[date];
    if (record?.checkedIn) {
      streak += 1;
      gap = 0;
    } else {
      gap += 1;
      if (gap > 3) break;
    }
  }
  return Math.min(streak, 300);
}

function milestoneFor(streak) {
  if (streak >= 300) return { level: 300, title: "300级年度健康守护者" };
  if (streak >= 100) return { level: streak, title: `${streak}级长期坚持徽章` };
  if (streak >= 10) return { level: streak, title: `${Math.floor(streak / 10) * 10}天坚持动画徽章` };
  if (streak >= 7) return { level: 7, title: "七级徽章" };
  if (streak >= 3) return { level: 3, title: "三级徽章" };
  if (streak >= 1) return { level: 1, title: "启程称号" };
  return { level: 0, title: "等待第一次打卡" };
}

function renderRankPanel() {
  const windows = [
    ["近一天", averageScoreForLastDays(1)],
    ["近一周", averageScoreForLastDays(7)],
    ["近一月", averageScoreForLastDays(30)],
    ["近一季度", averageScoreForLastDays(90)],
    ["近一年", averageScoreForLastDays(365)]
  ];
  $("#rankPanel").innerHTML = windows
    .map(([label, score]) => {
      const rank = rankFromScore(score);
      return `<div class="rank-window ${rank.className}"><i class="rank-icon ${rank.iconClass}"></i><span>${label}</span><strong>${rank.name}</strong><em>${score} 分 · ${rank.short}</em></div>`;
    })
    .join("");
}

function renderStreakPanel() {
  const streak = computeStreak();
  const milestone = milestoneFor(streak);
  const next = streak < 3 ? 3 : streak < 7 ? 7 : streak < 100 ? Math.ceil((streak + 1) / 10) * 10 : Math.min(300, Math.ceil((streak + 1) / 50) * 50);
  $("#streakPanel").innerHTML = `
    <div class="streak-card">
      <span>连续打卡</span>
      <strong>${streak} 天</strong>
      <p>${milestone.title} · 断签有 3 天补救期</p>
      <div class="streak-track"><span style="width:${Math.min(100, (streak / next) * 100)}%"></span></div>
      <small>下一目标：${next} 天</small>
    </div>
  `;
}

function renderCalendarGrid() {
  const [year, month] = state.visibleMonth.split("-").map(Number);
  const first = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const startBlank = first.getDay();
  $("#calendarMonthLabel").textContent = `${year}年 ${month}月`;
  const cells = [];
  ["日", "一", "二", "三", "四", "五", "六"].forEach((day) => cells.push(`<div class="calendar-weekday">${day}</div>`));
  for (let i = 0; i < startBlank; i += 1) cells.push(`<div class="calendar-cell muted"></div>`);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const record = state.calendarRecords[date];
    const score = record ? calculateDayScore(record) : 0;
    cells.push(`
      <button class="calendar-cell ${date === state.selectedDate ? "active" : ""} ${record?.checkedIn ? "checked" : ""}" data-date="${date}" type="button">
        <strong>${day}</strong>
        <span>${record ? `${score}分` : "未记"}</span>
      </button>
    `);
  }
  $("#calendarGrid").innerHTML = cells.join("");
}

function loadDayEditor() {
  const record = dayRecord();
  $("#calendarDate").value = state.selectedDate;
  $("#calendarBreakfast").value = record.breakfast || "";
  $("#calendarLunch").value = record.lunch || "";
  $("#calendarDinner").value = record.dinner || "";
  $("#calendarExerciseType").value = record.exerciseType || "aerobic";
  $("#calendarExerciseMinutes").value = record.exerciseMinutes || 0;
  $("#calendarExercise").value = record.exercise || "";
  $("#calendarBurned").value = record.burned || estimateExerciseBurned(record.exerciseType, record.exerciseMinutes);
  $("#calendarPlan").value = record.plan || "轻量恢复";
  renderBurnEstimate();
  const score = calculateDayScore(record);
  const rank = rankFromScore(score);
  $("#dayScorePanel").innerHTML = `<strong>${score} 分</strong><span class="score-rank-line"><i class="rank-icon ${rank.iconClass}"></i>${rank.name}</span><p>${record.checkedIn ? "今日已打卡" : "保存记录后可以点击今日打卡。"} AI 当前按 ${exerciseTypeLabels[record.exerciseType] || "运动"} ${record.exerciseMinutes || 0} 分钟估算消耗。</p>`;
}

function renderBurnEstimate() {
  const type = $("#calendarExerciseType").value || "aerobic";
  const minutes = Math.max(0, Number($("#calendarExerciseMinutes").value) || 0);
  const burned = estimateExerciseBurned(type, minutes);
  $("#calendarBurned").value = burned;
  $("#burnEstimate").innerHTML = `
    <strong>${burned} kcal</strong>
    <span>AI 估算：${exerciseTypeLabels[type]} ${minutes} 分钟。默认按 65kg 成人中等强度估算，后续可接入身高体重做个人化。</span>
  `;
}

function renderCalendarSystem() {
  renderRankPanel();
  renderStreakPanel();
  renderCalendarGrid();
  loadDayEditor();
}

function saveDayLog({ checkedIn = false } = {}) {
  const date = $("#calendarDate").value || state.selectedDate;
  state.selectedDate = date;
  state.visibleMonth = date.slice(0, 7);
  const previous = dayRecord(date);
  const exerciseType = $("#calendarExerciseType").value || "aerobic";
  const exerciseMinutes = Math.max(0, Number($("#calendarExerciseMinutes").value) || 0);
  const burned = estimateExerciseBurned(exerciseType, exerciseMinutes);
  const record = {
    breakfast: $("#calendarBreakfast").value.trim(),
    lunch: $("#calendarLunch").value.trim(),
    dinner: $("#calendarDinner").value.trim(),
    meals: [$("#calendarBreakfast").value.trim(), $("#calendarLunch").value.trim(), $("#calendarDinner").value.trim()].filter(Boolean).join("；"),
    exerciseType,
    exerciseMinutes,
    exercise: $("#calendarExercise").value.trim(),
    burned,
    plan: $("#calendarPlan").value,
    checkedIn: checkedIn || previous.checkedIn,
    updatedAt: new Date().toISOString()
  };
  record.score = calculateDayScore(record);
  state.calendarRecords[date] = record;
  saveCalendarRecords();
  renderCalendarSystem();
}

function triggerBadgeAnimation(message) {
  const box = $("#badgeAnimation");
  box.innerHTML = `<div class="badge-burst"><strong>${message}</strong><span>继续保持，健康指数正在升级</span><i></i><i></i><i></i><i></i></div>`;
  window.setTimeout(() => {
    box.innerHTML = "";
  }, 3600);
}

function checkInToday() {
  state.selectedDate = localDateString();
  $("#calendarDate").value = state.selectedDate;
  saveDayLog({ checkedIn: true });
  const streak = computeStreak();
  const milestone = milestoneFor(streak);
  triggerBadgeAnimation(`${streak} 天打卡成功 · ${milestone.title}`);
}

function guessPhotoFoodText(sources = []) {
  const normalized = sources
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/g, " ")
    .replace(/[_-]+/g, " ");
  const hasZeroSignal = /(无糖|零糖|0糖|零度|zero|diet|sugar free)/i.test(normalized);
  const guessed = [];
  const used = new Set();
  photoKeywordHints.forEach((hint) => {
    if (hasZeroSignal && hint.label === "可乐") return;
    if (hint.keywords.some((keyword) => normalized.includes(keyword.toLowerCase())) && !used.has(hint.text)) {
      guessed.push(hint.text);
      used.add(hint.text);
    }
  });
  return guessed.join("\n");
}

function renderPhotoVisionResult(content) {
  const box = $("#photoVisionResult");
  if (!box) return;
  box.innerHTML = content;
}

function analyzeVisionText(text, title = "AI 视觉识别结果") {
  const clean = text.trim();
  state.photoVisionText = clean;
  if (!clean) {
    renderPhotoVisionResult(`<div class="empty-state">还没有可分析的内容。可以补充“牛排180g 米饭150g 无糖可乐1罐”。</div>`);
    return;
  }
  const parsed = parseFoodLog(clean);
  if (!parsed.matches.length) {
    renderPhotoVisionResult(`
      <div class="vision-summary">
        <strong>${title}</strong>
        <p>还没有识别到可计算的食物。请在补充线索里写得更具体，例如“牛排 180g”“无糖可乐 1罐”。</p>
      </div>
    `);
    return;
  }
  $("#foodLogInput").value = clean;
  renderFoodAnalysis({ ...parsed, totals: analysisTotals(parsed.matches) });
  const totals = analysisTotals(parsed.matches);
  renderPhotoVisionResult(`
    <div class="vision-summary">
      <strong>${title}</strong>
      <p>${clean.replace(/\n/g, "；")}</p>
      <div class="vision-tags">
        ${parsed.matches
          .map((entry) => `<div class="vision-tag"><strong>${escapeHtml(entry.item.name)}</strong><span>${round(entry.item.kcal * entry.scale)} kcal · 糖 ${round(entry.item.sugar * entry.scale, 1)}g</span></div>`)
          .join("")}
      </div>
      <p>合计约 ${round(totals.kcal)} kcal，糖分 ${round(totals.sugar, 1)}g。已同步到 AI 健康助手。</p>
    </div>
  `);
}

async function detectBarcodesFromPhoto(file) {
  if (!("BarcodeDetector" in window) || !window.createImageBitmap) return [];
  try {
    const detector = new BarcodeDetector({ formats: ["ean_13", "ean_8", "upc_a", "upc_e", "qr_code"] });
    const bitmap = await createImageBitmap(file);
    const codes = await detector.detect(bitmap);
    return codes.map((code) => code.rawValue).filter(Boolean);
  } catch (error) {
    return [];
  }
}

function productServingGram(product) {
  const direct = Number(product.serving_quantity);
  if (Number.isFinite(direct) && direct > 0) return direct;
  const sizeText = `${product.serving_size || ""} ${product.quantity || ""}`;
  const match = sizeText.match(/(\d+(?:\.\d+)?)\s*(g|克|ml|mL|毫升)/);
  if (match) return Number(match[1]);
  return 100;
}

function nutrimentServing(nutriments, key, servingGram, fallback = 0) {
  const serving = Number(nutriments?.[`${key}_serving`]);
  if (Number.isFinite(serving)) return serving;
  const per100 = Number(nutriments?.[`${key}_100g`]);
  if (Number.isFinite(per100)) return (per100 * servingGram) / 100;
  return fallback;
}

function sodiumMgFromNutriments(nutriments, servingGram) {
  const sodium = nutrimentServing(nutriments, "sodium", servingGram, NaN);
  if (Number.isFinite(sodium)) return sodium * 1000;
  const salt = nutrimentServing(nutriments, "salt", servingGram, NaN);
  if (Number.isFinite(salt)) return (salt / 2.5) * 1000;
  return 0;
}

async function fetchJsonWithTimeout(url, options = {}) {
  const { timeoutMs = 9000, ...fetchOptions } = options;
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        ...(fetchOptions.headers || {})
      }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function productToAnalysisItem(product) {
  const name = [product.brands, product.product_name].filter(Boolean).join(" ");
  const servingGram = productServingGram(product);
  const zeroSugarSignal = /(无糖|零糖|0糖|zero|diet|sugar free|zero sugar)/i.test(name);
  const sugar = zeroSugarSignal ? 0 : nutrimentServing(product.nutriments, "sugars", servingGram, 0);
  return {
    id: `off_${product.code || name}`,
    name: name || "联网食品",
    serving: `联网营养 / ${round(servingGram)}g或ml`,
    servingGram,
    kcal: nutrimentServing(product.nutriments, "energy-kcal", servingGram, 0),
    sugar,
    protein: nutrimentServing(product.nutriments, "proteins", servingGram, 0),
    fat: nutrimentServing(product.nutriments, "fat", servingGram, 0),
    sodium: sodiumMgFromNutriments(product.nutriments, servingGram),
    source: "open_food_facts"
  };
}

async function fetchOpenFoodFactsByBarcode(code) {
  const data = await fetchJsonWithTimeout(`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(code)}.json?fields=${openFoodFactsFields}`);
  return data.product || null;
}

async function searchOpenFoodFacts(query) {
  const data = await fetchJsonWithTimeout(`https://world.openfoodfacts.org/api/v2/search?search_terms=${encodeURIComponent(query)}&page_size=6&fields=${openFoodFactsFields}`);
  return (data.products || []).filter((product) => product.product_name || product.brands);
}

function analyzeOnlineProduct(product, title = "联网营养识别") {
  const item = productToAnalysisItem(product);
  const match = { item, scale: 1, raw: item.name };
  state.photoVisionText = item.name;
  $("#foodLogInput").value = item.name;
  renderFoodAnalysis({ matches: [match], unmatched: [], totals: analysisTotals([match]) });
  renderPhotoVisionResult(`
    <div class="vision-summary">
      <strong>${title}</strong>
      <p>${escapeHtml(item.name)}</p>
      <div class="vision-tags">
        <div class="vision-tag"><strong>热量</strong><span>${round(item.kcal)} kcal</span></div>
        <div class="vision-tag"><strong>糖分</strong><span>${round(item.sugar, 1)}g</span></div>
        <div class="vision-tag"><strong>蛋白质</strong><span>${round(item.protein, 1)}g</span></div>
        <div class="vision-tag"><strong>钠</strong><span>${round(item.sodium)}mg</span></div>
      </div>
      <p>已同步到 AI 健康助手。若商品名包含 Zero/无糖/零糖，糖分会按 0g 处理。</p>
    </div>
  `);
}

async function runOnlineFoodSearch() {
  const query = $("#onlineFoodSearchInput").value.trim();
  if (!query) {
    renderPhotoVisionResult(`<div class="empty-state">请输入商品名或条形码，比如 Coca Cola Zero。</div>`);
    return;
  }
  const button = $("#onlineFoodSearchBtn");
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "查询中";
  renderPhotoVisionResult(`<div class="vision-summary"><strong>正在联网查询</strong><p>正在搜索商品营养数据...</p></div>`);
  try {
    const product = /^\d{6,}$/.test(query) ? await fetchOpenFoodFactsByBarcode(query) : null;
    const products = product ? [product] : await searchOpenFoodFacts(query);
    state.photoOnlineProducts = products;
    if (!products.length) {
      renderPhotoVisionResult(`<div class="vision-summary"><strong>没有找到商品</strong><p>可以换成英文品牌名、完整产品名或条形码。</p></div>`);
      return;
    }
    renderPhotoVisionResult(`
      <div class="vision-summary">
        <strong>联网查询结果</strong>
        <div class="online-product-list">
          ${products
            .map((productItem, index) => {
              const item = productToAnalysisItem(productItem);
              return `
                <div class="online-product-card">
                  <strong>${escapeHtml(item.name)}</strong>
                  <span>${round(item.kcal)} kcal · 糖 ${round(item.sugar, 1)}g · ${escapeHtml(item.serving)}</span>
                  <button class="ghost-btn" type="button" data-online-product-index="${index}">加入分析</button>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    `);
  } catch (error) {
    renderPhotoVisionResult(`<div class="vision-summary"><strong>联网查询暂时失败</strong><p>网络或数据源可能不可用。你仍然可以在上方手动输入食物和克数进行分析。</p></div>`);
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

function runPhotoVisionFromInput() {
  const hint = $("#photoHintInput").value.trim();
  const guessed = guessPhotoFoodText([hint, state.photoFileName || ""]);
  const lines = [hint, guessed].filter(Boolean).join("\n").split(/\n+/).map((line) => line.trim()).filter(Boolean);
  analyzeVisionText([...new Set(lines)].join("\n"), "AI 视觉识别结果");
}

function savePhotoMealToCalendar() {
  const text = (state.photoVisionText || $("#foodLogInput").value || "").trim();
  if (!text) {
    renderPhotoVisionResult(`<div class="empty-state">还没有可记录的识别内容。</div>`);
    return;
  }
  const target = $("#photoMealTarget").value;
  const fieldMap = { breakfast: "#calendarBreakfast", lunch: "#calendarLunch", dinner: "#calendarDinner" };
  const field = $(fieldMap[target]);
  field.value = [field.value.trim(), text.replace(/\n/g, "；")].filter(Boolean).join("；");
  saveDayLog();
  triggerBadgeAnimation("已记录到今日日历");
}

async function handlePhotoUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  state.photoFileName = file.name;
  const url = URL.createObjectURL(file);
  $("#photoPreview").innerHTML = `
    <img src="${url}" alt="上传的餐食照片预览" />
    <div>
      <strong>照片已上传</strong>
      <p>正在尝试识别图片名称、包装条码和可联网商品营养。识别不准时，可以在下方补充食物和克数。</p>
    </div>
  `;
  renderPhotoVisionResult(`<div class="vision-summary"><strong>正在识别</strong><p>正在读取照片信息...</p></div>`);
  const guessed = guessPhotoFoodText([file.name]);
  const barcodes = await detectBarcodesFromPhoto(file);
  if (barcodes.length) {
    try {
      const product = await fetchOpenFoodFactsByBarcode(barcodes[0]);
      if (product) {
        analyzeOnlineProduct(product, "条码识别 + 联网营养");
        return;
      }
    } catch (error) {
      // Fall back to local guessing below.
    }
  }
  if (guessed) {
    analyzeVisionText(guessed, "图片线索识别");
    return;
  }
  renderPhotoVisionResult(`
    <div class="vision-summary">
      <strong>需要一点补充</strong>
      <p>这张照片没有读到条码，也没有从文件名里识别出食物。请补充“牛排180g 米饭150g 无糖可乐1罐”这类线索，再点 AI 识别并分析。</p>
    </div>
  `);
}

function setupWelcomeScreen() {
  const screen = $("#welcomeScreen");
  const enter = $("#enterAppBtn");
  if (!screen || !enter) return;
  let seen = false;
  try {
    seen = localStorage.getItem(WELCOME_STORAGE_KEY) === "yes";
  } catch (error) {
    seen = false;
  }
  if (seen) {
    screen.hidden = true;
    return;
  }
  enter.addEventListener("click", () => {
    screen.classList.add("closing");
    try {
      localStorage.setItem(WELCOME_STORAGE_KEY, "yes");
    } catch (error) {
      // Ignore private-mode storage failures.
    }
    window.setTimeout(() => {
      screen.hidden = true;
    }, 620);
  });
}

function setupSideNav() {
  const menuToggle = $("#menuToggle");
  const sideNav = $("#sideNav");
  const navBackdrop = $("#navBackdrop");
  if (!menuToggle || !sideNav || !navBackdrop) return;

  const closeSideNav = () => {
    menuToggle.classList.remove("open");
    sideNav.classList.remove("open");
    navBackdrop.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    sideNav.setAttribute("aria-hidden", "true");
    navBackdrop.hidden = true;
  };

  const openSideNav = () => {
    menuToggle.classList.add("open");
    sideNav.classList.add("open");
    navBackdrop.hidden = false;
    requestAnimationFrame(() => navBackdrop.classList.add("show"));
    menuToggle.setAttribute("aria-expanded", "true");
    sideNav.setAttribute("aria-hidden", "false");
  };

  menuToggle.addEventListener("click", () => {
    if (sideNav.classList.contains("open")) {
      closeSideNav();
      return;
    }
    openSideNav();
  });
  navBackdrop.addEventListener("click", closeSideNav);
  $$(".side-nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href")?.replace("#", "");
      if (featurePanelIds.includes(target)) {
        event.preventDefault();
        activatePanel(target);
      } else if (target && document.getElementById(target)) {
        event.preventDefault();
        transitionToAnchor(target);
      }
      closeSideNav();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSideNav();
  });
}

function attachEvents() {
  setupSideNav();
  const renderIngredientsDebounced = debounce(renderIngredients);
  const renderDrinksDebounced = debounce(renderDrinks);
  $$('a[href^="#"]').forEach((link) => {
    if (link.classList.contains("side-nav-link")) return;
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href")?.replace("#", "");
      if (featurePanelIds.includes(target)) {
        event.preventDefault();
        activatePanel(target);
      } else if (target && document.getElementById(target)) {
        event.preventDefault();
        transitionToAnchor(target);
      }
    });
  });
  $$(".goal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const keepAnalysisRank = state.rankMode === "analysis";
      state.goal = btn.dataset.goal;
      $$(".goal-btn").forEach((item) => {
        item.classList.toggle("active", item === btn);
        item.setAttribute("aria-selected", item === btn ? "true" : "false");
      });
      renderGoalSummary();
      renderRecipeStats();
      generateDay();
      if (keepAnalysisRank && state.lastAnalysis) renderFoodAnalysis(state.lastAnalysis);
    });
  });

  $("#generateDayBtn").addEventListener("click", generateDay);
  $("#ingredientSearch").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderIngredientsDebounced();
  });
  $("#categoryFilters").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-category]");
    if (!btn) return;
    state.category = btn.dataset.category;
    renderIngredientFilters();
    renderIngredients();
  });
  $("#ingredientList").addEventListener("click", (event) => {
    const btn = event.target.closest(".add-ingredient");
    if (!btn) return;
    const gramsInput = document.querySelector(`[data-grams-for="${btn.dataset.id}"]`);
    addToBasket(btn.dataset.id, Number(gramsInput.value));
  });
  $("#basketTable").addEventListener("input", (event) => {
    if (!event.target.classList.contains("basket-grams")) return;
    const row = state.basket.find((item) => item.id === event.target.dataset.id);
    if (row) row.grams = Math.max(1, Number(event.target.value) || 1);
  });
  $("#basketTable").addEventListener("click", (event) => {
    const btn = event.target.closest(".remove-basket");
    if (!btn) return;
    state.basket = state.basket.filter((item) => item.id !== btn.dataset.id);
    renderBasket();
  });
  $("#parsePantryBtn").addEventListener("click", parsePantryText);
  $("#composeDishBtn").addEventListener("click", composeDish);
  $("#sampleBasketBtn").addEventListener("click", () => {
    state.basket = [
      { id: "chicken_breast", grams: 150 },
      { id: "broccoli", grams: 180 },
      { id: "brown_rice", grams: 120 },
      { id: "olive_oil", grams: 6 }
    ];
    renderBasket();
    composeDish();
  });
  $("#clearBasketBtn").addEventListener("click", () => {
    state.basket = [];
    $("#customDish").innerHTML = "";
    $("#parseNotice").textContent = "";
    renderBasket();
  });
  $("#drinkSearch").addEventListener("input", (event) => {
    state.drinkSearch = event.target.value;
    renderDrinksDebounced();
  });
  $("#drinkFilters").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-drink-category]");
    if (!btn) return;
    state.drinkCategory = btn.dataset.drinkCategory;
    renderDrinkFilters();
    renderDrinks();
  });
  $("#analyzeFoodBtn").addEventListener("click", analyzeFoodLog);
  $("#demoAnalysisBtn").addEventListener("click", () => {
    $("#foodLogInput").value = "牛排 180g\n米饭 150g\n西兰花 150g\n无糖可乐 1罐";
    analyzeFoodLog();
  });
  $("#clearAnalysisBtn").addEventListener("click", () => {
    $("#foodLogInput").value = "";
    state.lastAnalysis = null;
    state.rankMode = "menu";
    renderAnalysisEmpty();
    renderTopHealthRankFromMeals();
  });
  $("#generateWeekBtn").addEventListener("click", generateWeeklyPlan);
  $("#photoInput").addEventListener("change", handlePhotoUpload);
  $("#runPhotoVisionBtn").addEventListener("click", runPhotoVisionFromInput);
  $("#onlineFoodSearchBtn").addEventListener("click", runOnlineFoodSearch);
  $("#savePhotoMealBtn").addEventListener("click", savePhotoMealToCalendar);
  $("#photoVisionResult").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-online-product-index]");
    if (!btn) return;
    const product = state.photoOnlineProducts[Number(btn.dataset.onlineProductIndex)];
    if (product) analyzeOnlineProduct(product, "联网营养识别");
  });
  $("#prevMonthBtn").addEventListener("click", () => {
    const [year, month] = state.visibleMonth.split("-").map(Number);
    state.visibleMonth = localDateString(new Date(year, month - 2, 1)).slice(0, 7);
    renderCalendarSystem();
  });
  $("#nextMonthBtn").addEventListener("click", () => {
    const [year, month] = state.visibleMonth.split("-").map(Number);
    state.visibleMonth = localDateString(new Date(year, month, 1)).slice(0, 7);
    renderCalendarSystem();
  });
  $("#calendarGrid").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-date]");
    if (!btn) return;
    state.selectedDate = btn.dataset.date;
    state.visibleMonth = state.selectedDate.slice(0, 7);
    renderCalendarSystem();
  });
  $("#calendarDate").addEventListener("change", (event) => {
    state.selectedDate = event.target.value || localDateString();
    state.visibleMonth = state.selectedDate.slice(0, 7);
    renderCalendarSystem();
  });
  ["#calendarExerciseType", "#calendarExerciseMinutes"].forEach((selector) => {
    $(selector).addEventListener("input", renderBurnEstimate);
    $(selector).addEventListener("change", renderBurnEstimate);
  });
  $("#saveDayLogBtn").addEventListener("click", () => saveDayLog());
  $("#checkInBtn").addEventListener("click", checkInToday);
}

function init() {
  setupWelcomeScreen();
  renderAppCounts();
  renderGoalSummary();
  renderIngredientStats();
  renderRecipeStats();
  renderIngredientFilters();
  renderIngredients();
  renderBasket();
  renderDrinkFilters();
  renderDrinks();
  renderAnalysisEmpty();
  generateDay();
  generateWeeklyPlan();
  renderCalendarSystem();
  attachEvents();
  activatePanel(state.selectedPanel, false);
}

init();
