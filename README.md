## Tài liệu tham khảo
https://nx.dev/blog/versioning-and-releasing-packages-in-a-monorepo

<!-- lib dùng để generate CHANGELOG and sync version -->
https://www.npmjs.com/package/@jscutlery/semver

```shell
# install project
yarn install

# run release manual
git commit -m "fix(name-project): something project"
git commit -m "fix(app1): comment"
yarn release: name project

# run release manual all
yarn release:all

# run release automation
yarn commit

# generate libs share
npx nx generate @nrwl/react:library --name=hscUi --directory=libs/ui --publishable --importPath=@hsc-ui/hscUi

#push npm
yarn nx build --name
npm publish --access public

```
## Mô tả option khi chạy yarn commit

1. Chọn loại thay đổi (type)
Select the type of change that you're committing:
📌 Ví dụ: Nếu bạn thêm một tính năng, chọn feat.

 2. Phạm vi thay đổi (scope)
 What is the scope of this change (e.g. component or file name) (press enter to skip)
📌 Ví dụ: Nếu bạn chỉ thay đổi trong app1, nhập app1.

 3. Mô tả ngắn gọn (short description)
? Write a short, imperative tense description of the change (max 94 chars):
📌 Ví dụ: "update login validation" (Cập nhật validate đăng nhập)

4. Mô tả chi tiết (long description)
? Provide a longer description of the change (press enter to skip)
📌 Ví dụ: something

5. Thay đổi có gây ảnh hưởng (breaking changes) không?
? Are there any breaking changes? (Yes/No)
📌 Ví dụ: Nếu bạn thay đổi API nhưng không tương thích ngược, chọn Yes và mô tả thêm.

6. Thay đổi có liên quan đến issue nào không?
? Does this change affect any open issues? (Yes/No)
Yes nếu commit này liên quan đến một issue trên GitHub/Jira.
No nếu không.
Nếu chọn Yes, bạn có thể thêm mã issue như "fix #123".

=> cuối cùng chạy yarn release:all

## Mô tả update version 
```shell
yarn commit
```
Nếu thay đổi chỉ là bug fix → version sẽ tăng theo dạng 0.0.x (patch update).

Nếu thay đổi có tính năng mới → version sẽ tăng theo dạng 0.x.0 (minor update).

Nếu thay đổi lớn, ảnh hưởng đến backward compatibility → version sẽ lên 1.0.0 (major update).

